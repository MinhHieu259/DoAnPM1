-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th5 29, 2022 lúc 05:09 AM
-- Phiên bản máy phục vụ: 10.4.24-MariaDB
-- Phiên bản PHP: 8.1.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `doan1`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `batdongsan`
--

CREATE TABLE `batdongsan` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `maTkKhachHang` bigint(20) UNSIGNED NOT NULL,
  `maTkNguoiDuyet` bigint(20) UNSIGNED DEFAULT NULL,
  `maHangMuc` bigint(20) UNSIGNED NOT NULL,
  `maHinhThuc` bigint(20) UNSIGNED NOT NULL,
  `tieuDe` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `ngayBatDau` date DEFAULT NULL,
  `ngayKetThuc` date DEFAULT NULL,
  `diaChi` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `dienTich` double DEFAULT 0,
  `maDonViDt` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT 'm2',
  `giaTien` double NOT NULL,
  `maDonViGiaTien` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'VND',
  `moTa` text COLLATE utf8mb4_unicode_ci DEFAULT '',
  `thongTinPhapLy` text COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `soPhongNgu` int(11) DEFAULT 0,
  `soPhongVeSinh` int(11) DEFAULT 0,
  `soTang` int(11) DEFAULT 1,
  `huongNha` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `huongBanCong` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `duongVao` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `matTien` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `noiThat` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT '',
  `trangThai` tinyint(4) NOT NULL DEFAULT 1,
  `tenLienHe` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `soDienThoai` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `diaChiLienHe` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `emailLienHe` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `donvi`
--

CREATE TABLE `donvi` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tenDonVi` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `loaiDonVi` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `trangThai` tinyint(4) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `hangmuc`
--

CREATE TABLE `hangmuc` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tieuDe` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `moTa` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `hangmuc`
--

INSERT INTO `hangmuc` (`id`, `tieuDe`, `moTa`, `created_at`, `updated_at`) VALUES
(2, 'Nhà mặt tiền', 'Nhà mặt tiền', NULL, NULL),
(3, 'Nhà trong hẻm', 'Nhà trong hẻm', NULL, NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `hinhanh`
--

CREATE TABLE `hinhanh` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `maBatDongSan` bigint(20) UNSIGNED NOT NULL,
  `hinhAnh` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `hinhanhtintuc`
--

CREATE TABLE `hinhanhtintuc` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `maTinTuc` bigint(20) UNSIGNED NOT NULL,
  `hinhAnh` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `hinhthuc`
--

CREATE TABLE `hinhthuc` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tenHinhThuc` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `trangThai` tinyint(4) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `hinhthuc`
--

INSERT INTO `hinhthuc` (`id`, `tenHinhThuc`, `trangThai`, `created_at`, `updated_at`) VALUES
(1, 'Bán', 1, NULL, NULL),
(2, 'Cho Thuê', 1, NULL, NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `loaitindang`
--

CREATE TABLE `loaitindang` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tenLoaiTinDang` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `gia` double NOT NULL,
  `trangThai` tinyint(4) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_11_132700_phanquyen', 1),
(2, '2014_10_11_132710_create_table_tinh_thanh', 1),
(3, '2014_10_11_132720_create_table_quan_huyen', 1),
(4, '2014_10_11_132730_create_xaphuong_table', 1),
(5, '2014_10_12_000000_create_users_table', 1),
(6, '2014_10_12_100000_create_password_resets_table', 1),
(7, '2019_08_19_000000_create_failed_jobs_table', 1),
(8, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(9, '2022_04_24_152444_create_table_loai_tin_dang', 1),
(10, '2022_04_24_154157_create_table_hangmuc', 1),
(11, '2022_04_24_155004_create_table_hinhthuc', 1),
(12, '2022_04_24_155415_create_table_donvi', 1),
(13, '2022_04_24_160400_create_table_batdongsan', 1),
(14, '2022_04_24_164318_create_table_hinhanh', 1),
(15, '2022_04_24_164539_create_table_tintuc', 1),
(16, '2022_04_24_164954_create_table_hinhanhtin', 1),
(17, '2022_05_21_172754_create_table_social', 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `phanquyen`
--

CREATE TABLE `phanquyen` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tenPhanQuyen` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `moTa` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `phanquyen`
--

INSERT INTO `phanquyen` (`id`, `tenPhanQuyen`, `moTa`, `created_at`, `updated_at`) VALUES
(1, 'ADMIN', 'Quản trị viên', NULL, NULL),
(2, 'USER', 'Người dùng', NULL, NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `quanhuyen`
--

CREATE TABLE `quanhuyen` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tenQuanHuyen` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `maTinhThanh` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `quanhuyen`
--

INSERT INTO `quanhuyen` (`id`, `tenQuanHuyen`, `maTinhThanh`, `created_at`, `updated_at`) VALUES
(1, 'Cẩm lệ', 1, NULL, NULL),
(2, 'Hải Châu', 1, NULL, NULL),
(5, 'Hoàng sa', 1, NULL, NULL),
(6, 'Hoà vang', 1, NULL, NULL),
(9, 'Liên chiểu', 1, NULL, NULL),
(10, 'Ngũ hành sơn', 1, NULL, NULL),
(11, 'Sơn trà', 1, NULL, NULL),
(12, 'Thanh khê', 1, NULL, NULL),
(13, 'Phong Điền', 2, NULL, NULL),
(14, 'A Lưới', 2, NULL, NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `social`
--

CREATE TABLE `social` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `provider_user_id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `provider` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tinhthanh`
--

CREATE TABLE `tinhthanh` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tenTinhThanh` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `tinhthanh`
--

INSERT INTO `tinhthanh` (`id`, `tenTinhThanh`, `created_at`, `updated_at`) VALUES
(1, 'Đà nẵng', NULL, NULL),
(2, 'Thừa Thiên Huế', NULL, NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tintuc`
--

CREATE TABLE `tintuc` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `maTkNguoiDung` bigint(20) UNSIGNED NOT NULL,
  `maHangMuc` bigint(20) UNSIGNED NOT NULL,
  `tieuDe` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'tieu de tin tuc',
  `noiDung` text COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'noi dung tin tuc',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `avatar` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `maPhanQuyen` bigint(20) UNSIGNED NOT NULL DEFAULT 2,
  `ngaySinh` date DEFAULT NULL,
  `diaChi` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `gioiTinh` tinyint(4) DEFAULT NULL,
  `soDienThoai` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `cmnd` varchar(15) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `facebook` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `trangThai` tinyint(4) NOT NULL DEFAULT 1,
  `maXaPhuong` bigint(20) UNSIGNED DEFAULT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `avatar`, `maPhanQuyen`, `ngaySinh`, `diaChi`, `gioiTinh`, `soDienThoai`, `cmnd`, `facebook`, `trangThai`, `maXaPhuong`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Nguyễn Minh Hiếu', 'minhhieu.it.ute@gmail.com', NULL, '$2y$10$lV6Wf.iLy.ZjCfCef9OBz.t1Y4TMtYhQ2Pk7TTCyZGdhCabV6d71C', 'uploads/avatar/1653660226.png', 2, '2001-11-10', 'Huế', 1, '0774452227', '191973289', 'facebook.com/hieuuit', 1, NULL, NULL, '2022-05-27 05:02:45', '2022-05-28 01:43:33');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `xaphuong`
--

CREATE TABLE `xaphuong` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tenXaPhuong` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `maQuanHuyen` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `xaphuong`
--

INSERT INTO `xaphuong` (`id`, `tenXaPhuong`, `maQuanHuyen`, `created_at`, `updated_at`) VALUES
(1, 'Phường Hoà An', 1, NULL, NULL),
(2, 'Phường Hoà Phát', 1, NULL, NULL),
(3, 'Phường Thanh Bình', 2, NULL, NULL),
(4, 'Phường Thuận Phước', 2, NULL, NULL),
(5, 'Thị trấn Phong Điền', 13, NULL, NULL),
(6, 'Xã Điền Hải', 13, NULL, NULL),
(9, 'Thị trấn A Lưới', 14, NULL, NULL),
(10, 'Xã A Đớt', 14, NULL, NULL);

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `batdongsan`
--
ALTER TABLE `batdongsan`
  ADD PRIMARY KEY (`id`),
  ADD KEY `batdongsan_matkkhachhang_foreign` (`maTkKhachHang`),
  ADD KEY `batdongsan_mahangmuc_foreign` (`maHangMuc`),
  ADD KEY `batdongsan_mahinhthuc_foreign` (`maHinhThuc`);

--
-- Chỉ mục cho bảng `donvi`
--
ALTER TABLE `donvi`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Chỉ mục cho bảng `hangmuc`
--
ALTER TABLE `hangmuc`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `hinhanh`
--
ALTER TABLE `hinhanh`
  ADD PRIMARY KEY (`id`),
  ADD KEY `hinhanh_mabatdongsan_foreign` (`maBatDongSan`);

--
-- Chỉ mục cho bảng `hinhanhtintuc`
--
ALTER TABLE `hinhanhtintuc`
  ADD PRIMARY KEY (`id`),
  ADD KEY `hinhanhtintuc_matintuc_foreign` (`maTinTuc`);

--
-- Chỉ mục cho bảng `hinhthuc`
--
ALTER TABLE `hinhthuc`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `loaitindang`
--
ALTER TABLE `loaitindang`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Chỉ mục cho bảng `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Chỉ mục cho bảng `phanquyen`
--
ALTER TABLE `phanquyen`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `quanhuyen`
--
ALTER TABLE `quanhuyen`
  ADD PRIMARY KEY (`id`),
  ADD KEY `quanhuyen_matinhthanh_foreign` (`maTinhThanh`);

--
-- Chỉ mục cho bảng `social`
--
ALTER TABLE `social`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `tinhthanh`
--
ALTER TABLE `tinhthanh`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `tintuc`
--
ALTER TABLE `tintuc`
  ADD PRIMARY KEY (`id`),
  ADD KEY `tintuc_matknguoidung_foreign` (`maTkNguoiDung`),
  ADD KEY `tintuc_mahangmuc_foreign` (`maHangMuc`);

--
-- Chỉ mục cho bảng `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`),
  ADD KEY `users_maphanquyen_foreign` (`maPhanQuyen`);

--
-- Chỉ mục cho bảng `xaphuong`
--
ALTER TABLE `xaphuong`
  ADD PRIMARY KEY (`id`),
  ADD KEY `xaphuong_maquanhuyen_foreign` (`maQuanHuyen`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `batdongsan`
--
ALTER TABLE `batdongsan`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=53;

--
-- AUTO_INCREMENT cho bảng `donvi`
--
ALTER TABLE `donvi`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `hangmuc`
--
ALTER TABLE `hangmuc`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT cho bảng `hinhanh`
--
ALTER TABLE `hinhanh`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=58;

--
-- AUTO_INCREMENT cho bảng `hinhanhtintuc`
--
ALTER TABLE `hinhanhtintuc`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `hinhthuc`
--
ALTER TABLE `hinhthuc`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT cho bảng `loaitindang`
--
ALTER TABLE `loaitindang`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT cho bảng `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT cho bảng `phanquyen`
--
ALTER TABLE `phanquyen`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT cho bảng `quanhuyen`
--
ALTER TABLE `quanhuyen`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT cho bảng `social`
--
ALTER TABLE `social`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `tinhthanh`
--
ALTER TABLE `tinhthanh`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT cho bảng `tintuc`
--
ALTER TABLE `tintuc`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT cho bảng `xaphuong`
--
ALTER TABLE `xaphuong`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `batdongsan`
--
ALTER TABLE `batdongsan`
  ADD CONSTRAINT `batdongsan_mahangmuc_foreign` FOREIGN KEY (`maHangMuc`) REFERENCES `hangmuc` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `batdongsan_mahinhthuc_foreign` FOREIGN KEY (`maHinhThuc`) REFERENCES `hinhthuc` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `batdongsan_matkkhachhang_foreign` FOREIGN KEY (`maTkKhachHang`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Các ràng buộc cho bảng `hinhanh`
--
ALTER TABLE `hinhanh`
  ADD CONSTRAINT `hinhanh_mabatdongsan_foreign` FOREIGN KEY (`maBatDongSan`) REFERENCES `batdongsan` (`id`) ON DELETE CASCADE;

--
-- Các ràng buộc cho bảng `hinhanhtintuc`
--
ALTER TABLE `hinhanhtintuc`
  ADD CONSTRAINT `hinhanhtintuc_matintuc_foreign` FOREIGN KEY (`maTinTuc`) REFERENCES `tintuc` (`id`) ON DELETE CASCADE;

--
-- Các ràng buộc cho bảng `quanhuyen`
--
ALTER TABLE `quanhuyen`
  ADD CONSTRAINT `quanhuyen_matinhthanh_foreign` FOREIGN KEY (`maTinhThanh`) REFERENCES `tinhthanh` (`id`) ON DELETE CASCADE;

--
-- Các ràng buộc cho bảng `tintuc`
--
ALTER TABLE `tintuc`
  ADD CONSTRAINT `tintuc_mahangmuc_foreign` FOREIGN KEY (`maHangMuc`) REFERENCES `hangmuc` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `tintuc_matknguoidung_foreign` FOREIGN KEY (`maTkNguoiDung`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Các ràng buộc cho bảng `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_maphanquyen_foreign` FOREIGN KEY (`maPhanQuyen`) REFERENCES `phanquyen` (`id`) ON DELETE CASCADE;

--
-- Các ràng buộc cho bảng `xaphuong`
--
ALTER TABLE `xaphuong`
  ADD CONSTRAINT `xaphuong_maquanhuyen_foreign` FOREIGN KEY (`maQuanHuyen`) REFERENCES `quanhuyen` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
