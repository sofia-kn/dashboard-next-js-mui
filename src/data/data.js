import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import TaskOutlinedIcon from '@mui/icons-material/TaskOutlined';
const salesCard = [
  {
    id: "1",
    icon: "/images/Group.png",
    count: "$5k",
    title: "Total Sales",
    precent: "+10% from yesterday",
  },
  {
    id: "2",
    icon: "/images/Group (1).png",
    count: "500",
    title: "Total Order",
    precent: "+8% from yesterday",
  },
  {
    id: "3",
    icon: "/images/Vector.png",
    count: "9",
    title: "Product Sold",
    precent: "+2% from yesterday",
  },
  {
    id: "4",
    icon: "/images/Group (2).png",
    count: "12",
    title: "New Customer",
    precent: "+3% from yesterday",
  },
];

const products = [
  {
    id: "01",
    name: "Home Decore Range",
    popularity: "12",
    sales: 46,
    color: "warning",
  },
  {
    id: "02",
    name: "Disney Princess Dress",
    popularity: "12",
    sales: 17,
    color: "success",
  },
  {
    id: "03",
    name: "Bathroom Essentials",
    popularity: "12",
    sales: 19,
    color: "primary",
  },
  {
    id: "04",
    name: "Apple Smartwatch",
    popularity: "12",
    sales: 29,
    color: "secondary",
  },
];

const userProfile = [
  {
    id: "1",
    title: "My Profile",
    description: "Account Settings",
    icon: <AttachMoneyIcon color="primary" fontSize="large" />,
    bgColor:"rgb(229, 250, 251)"
  },
  {
    id: "2",
    title: "My Inbox",
    description: "Messages & Emails",
    icon: <ArchiveOutlinedIcon color="success" fontSize="large"/>,
    bgColor:"rgb(235, 250, 242)",

  },
  {
    id: "3",
    title: "My Tasks",
    description: "To-do and Daily Tasks",
    icon: <TaskOutlinedIcon color="white" fontSize="large"/>,
    bgColor:"rgb(254, 201, 15)"
  },
];

export { salesCard, products, userProfile };
