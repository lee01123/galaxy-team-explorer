export interface Employee {
  id: string;
  name: string;
  title: string;
  department: string;
  avatarUrl: string;
  description: string;
  expPoints: number;
  socialLinks?: {
    linkedin?: string;
    github?: string;
    email?: string;
  };
  relatedEmployees?: string[];
}

export const employees: Employee[] = [
  {
    id: "emp-001",
    name: "Nguyễn Văn An",
    title: "Giám Đốc Điều Hành",
    department: "Lãnh Đạo",
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=An",
    description: "Dẫn dắt công ty với tầm nhìn chiến lược và kinh nghiệm 15 năm trong ngành.",
    expPoints: 150,
    socialLinks: {
      linkedin: "https://linkedin.com",
      email: "an@company.com"
    },
    relatedEmployees: ["emp-002", "emp-003", "emp-004"]
  },
  {
    id: "emp-002",
    name: "Trần Thị Bình",
    title: "Giám Đốc Công Nghệ",
    department: "Công Nghệ",
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Binh",
    description: "Chuyên gia công nghệ với 12 năm kinh nghiệm phát triển và quản lý hệ thống.",
    expPoints: 120,
    socialLinks: {
      github: "https://github.com",
      linkedin: "https://linkedin.com"
    },
    relatedEmployees: ["emp-001", "emp-005", "emp-006"]
  },
  {
    id: "emp-003",
    name: "Lê Văn Cường",
    title: "Giám Đốc Marketing",
    department: "Marketing",
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Cuong",
    description: "Sáng tạo các chiến dịch marketing đột phá với 10 năm kinh nghiệm.",
    expPoints: 100,
    relatedEmployees: ["emp-001", "emp-007", "emp-008"]
  },
  {
    id: "emp-004",
    name: "Phạm Thị Dung",
    title: "Giám Đốc Nhân Sự",
    department: "Nhân Sự",
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Dung",
    description: "Xây dựng và phát triển đội ngũ nhân tài với 11 năm kinh nghiệm HR.",
    expPoints: 110,
    relatedEmployees: ["emp-001", "emp-009", "emp-010"]
  },
  {
    id: "emp-005",
    name: "Hoàng Văn Em",
    title: "Trưởng Phòng Phát Triển",
    department: "Công Nghệ",
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Em",
    description: "Lead đội ngũ phát triển với chuyên môn về React và Node.js.",
    expPoints: 85,
    relatedEmployees: ["emp-002", "emp-011", "emp-012"]
  },
  {
    id: "emp-006",
    name: "Vũ Thị Giang",
    title: "Trưởng Phòng QA",
    department: "Công Nghệ",
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Giang",
    description: "Đảm bảo chất lượng sản phẩm với kinh nghiệm testing 8 năm.",
    expPoints: 80,
    relatedEmployees: ["emp-002", "emp-005"]
  },
  {
    id: "emp-007",
    name: "Đỗ Văn Hải",
    title: "Trưởng Phòng Content",
    department: "Marketing",
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Hai",
    description: "Sáng tạo nội dung hấp dẫn và chiến lược content marketing.",
    expPoints: 75,
    relatedEmployees: ["emp-003", "emp-013"]
  },
  {
    id: "emp-008",
    name: "Ngô Thị Hoa",
    title: "Trưởng Phòng Digital Marketing",
    department: "Marketing",
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Hoa",
    description: "Chuyên gia về SEO, SEM và chiến dịch quảng cáo trực tuyến.",
    expPoints: 78,
    relatedEmployees: ["emp-003", "emp-014"]
  },
  {
    id: "emp-009",
    name: "Bùi Văn Khoa",
    title: "Trưởng Phòng Tuyển Dụng",
    department: "Nhân Sự",
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Khoa",
    description: "Tìm kiếm và thu hút nhân tài hàng đầu cho công ty.",
    expPoints: 72,
    relatedEmployees: ["emp-004", "emp-010"]
  },
  {
    id: "emp-010",
    name: "Đinh Thị Lan",
    title: "Trưởng Phòng Đào Tạo",
    department: "Nhân Sự",
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lan",
    description: "Phát triển và thực hiện các chương trình đào tạo nhân viên.",
    expPoints: 70,
    relatedEmployees: ["emp-004", "emp-009"]
  },
  {
    id: "emp-011",
    name: "Lý Văn Minh",
    title: "Senior Developer",
    department: "Công Nghệ",
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Minh",
    description: "Full-stack developer với đam mê về công nghệ mới.",
    expPoints: 65,
    relatedEmployees: ["emp-005", "emp-012"]
  },
  {
    id: "emp-012",
    name: "Mai Thị Nga",
    title: "Senior Developer",
    department: "Công Nghệ",
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Nga",
    description: "Chuyên gia về thiết kế UI/UX và frontend development.",
    expPoints: 68,
    relatedEmployees: ["emp-005", "emp-011"]
  },
  {
    id: "emp-013",
    name: "Phan Văn Oai",
    title: "Content Creator",
    department: "Marketing",
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Oai",
    description: "Tạo nội dung sáng tạo trên các nền tảng mạng xã hội.",
    expPoints: 55,
    relatedEmployees: ["emp-007"]
  },
  {
    id: "emp-014",
    name: "Tô Thị Phương",
    title: "SEO Specialist",
    department: "Marketing",
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Phuong",
    description: "Tối ưu hóa website và nội dung cho công cụ tìm kiếm.",
    expPoints: 58,
    relatedEmployees: ["emp-008"]
  },
  {
    id: "emp-015",
    name: "Cao Văn Quân",
    title: "Junior Developer",
    department: "Công Nghệ",
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Quan",
    description: "Developer trẻ tài năng đang phát triển kỹ năng React.",
    expPoints: 45,
    relatedEmployees: ["emp-005", "emp-011"]
  }
];
