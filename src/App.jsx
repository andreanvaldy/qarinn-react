import React, { useState } from 'react';
import './App.css';

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    // Validasi Nama
    if (!formData.name.trim()) {
      newErrors.name = 'Nama tidak boleh kosong.';
    } else if (formData.name.length > 20) {
      newErrors.name = 'Nama tidak boleh lebih dari 20 karakter.';
    }

    // Validasi Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email tidak boleh kosong.';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Format email tidak valid.';
    }

    // Validasi Kata Sandi
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;
    if (!formData.password) {
      newErrors.password = 'Kata sandi tidak boleh kosong.';
    } else if (!passwordRegex.test(formData.password)) {
      newErrors.password =
        'Kata sandi harus minimal 8 karakter, mengandung huruf besar, huruf kecil, angka, dan simbol.';
    }

    // Validasi Konfirmasi Kata Sandi
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Konfirmasi kata sandi tidak boleh kosong.';
    } else if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = 'Konfirmasi kata sandi harus sama dengan kata sandi.';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      alert('Pendaftaran berhasil!\n' + `Nama: ${formData.name}\nEmail: ${formData.email}`);
      setFormData({ name: '', email: '', password: '', confirmPassword: '' });
      setErrors({});
    }
  };

  return (
    <div className="form-container">
      <h1>Form Registrasi</h1>
      <form onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <label htmlFor="name">Nama</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Masukkan nama"
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Masukkan email"
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="password">Kata Sandi</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Masukkan kata sandi"
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="confirmPassword">Konfirmasi Kata Sandi</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Masukkan kembali kata sandi"
          />
          {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
        </div>

        <button type="submit" className="submit-btn">Daftar</button>
      </form>
    </div>
  );
}
