import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../contexts/AuthContext";
import { Toaster, toast } from "react-hot-toast";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";  
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MyOrders = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.email) return;

    axios.get(`https://pawmart-server-beta.vercel.app/orders?email=${user?.email}`)
      .then((res) => {
        setOrders(res.data);
        setLoading(false);
      }).catch((err) => {
        console.error(err);
        toast.error("Failed to fetch orders.");
        setLoading(false);
      });
  }, [user?.email]);

  const downloadPDF = () => {
    try {
      const doc = new jsPDF();

      doc.text("My Orders Report", 14, 20);

      const tableColumn = [
        "Product/Listing Name",
        "Buyer Name",
        "Price",
        "Quantity",
        "Address",
        "Date",
        "Phone",
      ];

      const tableRows = orders.map((order) => [
        order?.productName || "",
        order?.buyerName || "",
        order?.price || "",
        order?.quantity || "",
        order?.address || "",
        order?.date || "",
        order?.phone || "",
      ]);

      autoTable(doc, {
        head: [tableColumn],
        body: tableRows,
        startY: 30,
      });

      doc.save("my-orders.pdf");
      toast.success("Report downloaded!");
    } catch (error) {
      console.error(error);
      toast.error("PDF generation failed!");
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-spinner text-warning text-4xl"></span>
      </div>
    );
  }

  return (
    <>
      <Navbar></Navbar>
    <div className="w-11/12 mx-auto mt-10">
        <h1 className="text-[#0B6623] text-3xl font-bold mb-6 text-center">My Orders</h1>

      <div className="flex justify-end mb-4">
        <button
          onClick={downloadPDF}
            className="bg-[#0B6623] text-white px-6 py-2 rounded hover:bg-[#0B6623] transition"
        >Download Report </button>
      </div>

      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-4 py-2">Product/Listing Name</th>
              <th className="border px-4 py-2">Buyer Name</th>
              <th className="border px-4 py-2">Price</th>
              <th className="border px-4 py-2">Quantity</th>
              <th className="border px-4 py-2">Address</th>
              <th className="border px-4 py-2">Date</th>
              <th className="border px-4 py-2">Phone</th>
            </tr>
          </thead>
          <tbody>
            {orders.length === 0 ? (
              <tr>
                <td colSpan="7" className="text-center py-4">
                  No orders found
                </td>
              </tr>
            ) : (
              orders.map((order) => (
                <tr key={order._id} className="text-center">
                  <td className="border px-4 py-2">{order.productName}</td>
                  <td className="border px-4 py-2">{order.buyerName}</td>
                  <td className="border px-4 py-2">{order.price}</td>
                  <td className="border px-4 py-2">{order.quantity}</td>
                  <td className="border px-4 py-2">{order.address}</td>
                  <td className="border px-4 py-2">{order.date}</td>
                  <td className="border px-4 py-2">{order.phone}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
        </div>
        
      <Toaster />
      </div>
      <Footer></Footer>
      </>
  );
};

export default MyOrders;
