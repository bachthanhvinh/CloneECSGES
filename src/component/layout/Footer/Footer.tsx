import { Link } from "react-router";
import {
  FaFacebookF,
  FaYoutube,
  FaTiktok,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-[#E95327] text-white py-12 px-6 lg:px-16 font-sans">
      <div className="max-w-7xl mx-auto space-y-10">
        <div>
          <img
            src="https://ecs.edu.vn/wp-content/themes/ecsges/assets/img/logo-ecsges.svg?ver=1783562053"
            alt="ECSGES Logo"
            className="h-14 brightness-0 invert"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-sm">
          <div>
            <h3 className="font-bold text-base mb-4 uppercase tracking-wider">
              Về ECSGES
            </h3>
            <ul className="space-y-2.5 list-disc list-inside marker:text-white">
              <li>
                <Link to="#" className="hover:underline">
                  Hành trình phát triển
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:underline">
                  Tầm nhìn
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:underline">
                  Sứ mệnh
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:underline">
                  Giá trị cốt lõi
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-base mb-4 uppercase tracking-wider">
              Lĩnh vực hoạt động
            </h3>
            <ul className="space-y-2.5 list-disc list-inside marker:text-white">
              <li>
                <Link to="#" className="hover:underline">
                  Hướng nghiệp
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:underline">
                  Tuyển sinh
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:underline">
                  Đào tạo
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:underline">
                  Việc làm
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:underline">
                  Truyền thông
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-base mb-4 uppercase tracking-wider">
              Phát triển bền vững
            </h3>
            <ul className="space-y-2.5 list-disc list-inside marker:text-white">
              <li>
                <Link to="#" className="hover:underline">
                  Con người ECS
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:underline">
                  Văn hoá ECS
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:underline">
                  Trách nhiệm xã hội
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-base mb-4 uppercase tracking-wider">
              Liên hệ
            </h3>
            <div className="space-y-3">
              <p className="flex items-start gap-2.5">
                <FaMapMarkerAlt className="shrink-0 mt-1" />
                <span>
                  Địa chỉ: Toà ROX Tower Goldmark City 136 Hồ Tùng Mậu, Phú
                  Diễn, Hà Nội
                </span>
              </p>
              <p className="flex items-center gap-2.5">
                <FaEnvelope className="shrink-0" />
                <span>Email: contact@ecs.edu.vn</span>
              </p>
              <p className="flex items-center gap-2.5">
                <FaPhoneAlt className="shrink-0" />
                <span>Điện thoại: 024.668.39.668</span>
              </p>
            </div>

            <div className="flex items-center gap-3 mt-5">
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-white text-[#E95327] flex items-center justify-center hover:opacity-90 transition-opacity"
              >
                <FaFacebookF size={16} />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-white text-[#E95327] flex items-center justify-center hover:opacity-90 transition-opacity"
              >
                <FaYoutube size={16} />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-white text-[#E95327] flex items-center justify-center hover:opacity-90 transition-opacity"
              >
                <FaTiktok size={16} />
              </a>
            </div>
          </div>
        </div>

        <hr className="border-t border-white/30 my-6" />

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 text-xs text-white/90">
          <div className="space-y-1">
            <p className="font-bold text-sm text-white">
              CÔNG TY CỔ PHẦN HỖ TRỢ VÀ PHÁT TRIỂN ECSGES
            </p>
            <p>Mã số thuế: 0111517717</p>
            <p>
              © 2026 ECS Global Education System (ECSGES). All rights reserved.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs">
            <Link to="#" className="hover:underline">
              Chính sách quyền riêng tư
            </Link>
            <span>|</span>
            <Link to="#" className="hover:underline">
              Chính sách cookie
            </Link>
            <span>|</span>
            <Link to="#" className="hover:underline">
              Điều khoản dịch vụ
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
