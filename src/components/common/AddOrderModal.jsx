
// Modal form for adding a new order to the table
import React, { useState } from 'react';

// Status options for the order
const statusOptions = [
  { type: 'In Progress', color: '#8a8cd9', icon: '/images/img_dot_indigo_a100.svg' },
  { type: 'Complete', color: '#4aa785', icon: '/images/img_dot_teal_100.svg' },
  { type: 'Pending', color: '#59a8d4', icon: '/images/img_dot_light_blue_100.svg' },
  { type: 'Approved', color: '#ffc554', icon: '/images/img_dot_yellow_200.svg' },
  { type: 'Rejected', color: '#777777', icon: '/images/img_dot.svg' },
];


const AddOrderModal = ({ open, onClose, onSubmit }) => {
  // Form state for the new order
  const [form, setForm] = useState({
    id: '',
    user: { name: '', avatar: '/images/img_byewind.png' },
    project: '',
    address: '',
    date: '',
    status: statusOptions[0],
  });

  // Don't render modal if not open
  if (!open) return null;

  // Handle input changes for all fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'user.name') {
      setForm((prev) => ({ ...prev, user: { ...prev.user, name: value } }));
    } else if (name === 'status') {
      const status = statusOptions.find((s) => s.type === value);
      setForm((prev) => ({ ...prev, status }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  // Handle form submit: validate and reset
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.id || !form.user.name || !form.project) return;
    onSubmit(form);
    onClose();
    setForm({
      id: '',
      user: { name: '', avatar: '/images/img_byewind.png' },
      project: '',
      address: '',
      date: '',
      status: statusOptions[0],
    });
  };

  // Modal layout and form
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <form onSubmit={handleSubmit} className="bg-white rounded-lg p-6 w-[350px] flex flex-col gap-4">
        <h2 className="text-lg font-bold mb-2">Add New Order</h2>
        {/* Order ID input */}
        <input name="id" value={form.id} onChange={handleChange} placeholder="Order ID" className="border p-2 rounded" required />
        {/* User name input */}
        <input name="user.name" value={form.user.name} onChange={handleChange} placeholder="User Name" className="border p-2 rounded" required />
        {/* Project input */}
        <input name="project" value={form.project} onChange={handleChange} placeholder="Project" className="border p-2 rounded" required />
        {/* Address input */}
        <input name="address" value={form.address} onChange={handleChange} placeholder="Address" className="border p-2 rounded" />
        {/* Date input */}
        <input name="date" value={form.date} onChange={handleChange} placeholder="Date" className="border p-2 rounded" />
        {/* Status dropdown */}
        <select name="status" value={form.status.type} onChange={handleChange} className="border p-2 rounded">
          {statusOptions.map((s) => (
            <option key={s.type} value={s.type}>{s.type}</option>
          ))}
        </select>
        {/* Action buttons */}
        <div className="flex gap-2 mt-2">
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Add</button>
          <button type="button" className="bg-gray-300 px-4 py-2 rounded" onClick={onClose}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default AddOrderModal;
