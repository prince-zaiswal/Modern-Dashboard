import React from 'react';

// Icons
import { RiAccountPinBoxLine, RiArrowDropUpFill, RiArrowDropDownFill, RiArrowRightSLine } from '@remixicon/react';

// Progress Bar 
import { CircularProgressbar, CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

// ChartsJs
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js/auto";
import { Bar } from 'react-chartjs-2';


function Dashboard() {

  // Statics Box 
  const statics = [
    {
      title: 'Total Order',
      count: '75',
      stats: 3,
      icon: 'order',
      bgcolor: '#2a3366',
    },
    {
      title: 'Total Delivered',
      count: '70',
      stats: -3,
      icon: 'delivered',
      bgcolor: '#165246',
    },
    {
      title: 'Total Cancelled',
      count: '05',
      stats: 3,
      icon: 'cancelled',
      bgcolor: '#5f3237',
    },
    {
      title: 'Total Revenue',
      count: '$12k',
      stats: -3,
      icon: 'revenue',
      bgcolor: '#5b2a4a',
    },
  ];

  // Progress Bar
  const percentage = 70;

  // Data for weekly intervals
  const weeklyData = {
    labels: ['9', '7', '11', '13', '15', '17', '19', '21', '23', '25', '27'], // Example weekly labels
    datasets: [
      {
        labels: "Running",
        data: [4000, 6000, 6000, 14000, 17000, 10000, 5000, 5000, 15000, 10000, 5000,], // Example weekly sales data
        borderColor: 'transparent',
        backgroundColor: '#7294ff',
        borderWidth: 4,
        borderRadius: {
          topLeft: 30,
          topRight: 30,
          bottomLeft: 20,
          bottomRight: 30,
        },
        borderSkipped: false,
        fill: true,
        barThickness: 'flex',
        barPercentage: 0.8, // 80% of the available space for each bar
        categoryPercentage: 1, // 90% of the available space for each category

      },
      {
        labels: "Walking",
        data: [10000, 6000, 3000, 10000, 17000, 10000, 15000, 10000, 5000, 10000, 10000,], // Example weekly sales data
        borderColor: 'transparent',
        backgroundColor: '#7294ff',
        borderWidth: 4,
        borderRadius: {
          topLeft: 30,
          topRight: 30,
          bottomLeft: 50,
          bottomRight: 50,
        },
        borderSkipped: false,
        fill: true,
        barThickness: 'flex', // Ensure bars are flexible
        barPercentage: 0.8, // 80% of the available space for each bar
        categoryPercentage: 1, // 90% of the available space for each category
      },
    ],
  };

  // Chart Options
  const weeklyOptions = {
    responsive: true,  // Make the chart responsive
    maintainAspectRatio: false, // Allow the chart to stretch and fill its container
    plugins: {
      title: {
        display: false,
      },
      legend: {
        display: false,
      },
    },
    layout: {
      padding: {
        top: 0,    // Space above the chart
        right: 10,  // Space to the right of the chart
        bottom: 0, // Space below the chart
        left: 0,   // Space to the left of the chart
      },
    },
    scales: {
      x: {
        title: {
          display: false,
        },
        grid: {
          display: false, // Hide grid lines on the x-axis
        },
        border: {
          display: false, // Hide axis line for the x-axis
        },
        ticks: {
          padding: 10, // Space between x-axis labels and the axis line
          color: '#5f6064',
          font: {
            size: 14, // Font size for x-axis labels
            weight: 'bold', // Font weight for x-axis labels
            family: 'Helvetica', // Font family for x-axis labels
          },
        },
      },
      y: {
        title: {
          display: false,
        },
        grid: {
          color: '#2c2c34', // Light grid lines
          lineWidth: 3,
        },
        border: {
          display: false, // Hide axis line for the y-axis
        },
        ticks: {
          callback: (value) => {
            if (value >= 5000) {
              return `${value / 1000}k`; // Format y-axis labels
            }
            return value;
          },
          color: '#5f6064',
          padding: 20, // Space between y-axis labels and the axis line
          font: {
            size: 14, // Font size for x-axis labels
            weight: 'bold', // Font weight for x-axis labels
            family: 'Helvetica', // Font family for x-axis labels
          },
        },
      },
    },
  };

  // Order Status 
  const order = [
    {
      cname: 'Wade Warren',
      cprofile: 'https://wallpapers.com/images/hd/professional-profile-pictures-1168-x-1164-394dus1go9limvka.jpg',
      orderNo: '15478256',
      amt: '$124.00',
      status: 'Delivered',
    },
    {
      cname: 'Jane Cooper',
      cprofile: 'https://r2.erweima.ai/imgcompressed/img/compressed_6a27743ae08d87119836833f791c69ad.webp',
      orderNo: '48965786',
      amt: '$365.02',
      status: 'Delivered',
    },
    {
      cname: 'Guy Hawkins',
      cprofile: 'https://r2.erweima.ai/imgcompressed/img/compressed_b4b0fe5f13483d0500a81c915929f106.webp',
      orderNo: '78958215',
      amt: '$45.88',
      status: 'Cancelled',
    },
    {
      cname: 'Kristin Watson',
      cprofile: 'https://r2.erweima.ai/imgcompressed/img/compressed_b4b0fe5f13483d0500a81c915929f106.webp',
      orderNo: '20965732',
      amt: '$65.00',
      status: 'Pending',
    },
    {
      cname: 'Cody Fisher',
      cprofile: 'https://wallpapers.com/images/hd/professional-profile-pictures-1168-x-1164-394dus1go9limvka.jpg',
      orderNo: '95715620',
      amt: '$545.00',
      status: 'Delivered',
    },
    {
      cname: 'Savannah Nguyen',
      cprofile: 'https://r2.erweima.ai/imgcompressed/img/compressed_6a27743ae08d87119836833f791c69ad.webp',
      orderNo: '78514568',
      amt: '$128.20',
      status: 'Delivered',
    },
  ]

  //  Customer's Reviews
  const user_rating = [
    { id: 1, name: 'Alice Johnson', rating: 4, text: 'Excellent service, very happy with the results. The team was professional and the work was completed on time. Would recommend to others.', profilePicture: 'https://randomuser.me/api/portraits/men/1.jpg' },
    { id: 2, name: 'Bob Smith', rating: 2, text: 'Not satisfied, the service was slow and communication was poor. Had to follow up multiple times to get updates. Improvement needed.', profilePicture: 'https://randomuser.me/api/portraits/men/2.jpg' },
    { id: 3, name: 'Charlie Brown', rating: 5, text: 'Outstanding performance, exceeded all expectations! The attention to detail was remarkable, and the final outcome was beyond what I had imagined.', profilePicture: 'https://randomuser.me/api/portraits/men/3.jpg' },
    { id: 4, name: 'David Lee', rating: 3, text: 'The service was good, but there is room for improvement. While the staff was friendly, some aspects of the service could have been handled more efficiently.', profilePicture: 'https://randomuser.me/api/portraits/men/4.jpg' },
    { id: 5, name: 'Emma Wilson', rating: 4, text: 'Great job, very professional and timely. The work was done to a high standard, though there were minor delays that were communicated well.', profilePicture: 'https://randomuser.me/api/portraits/women/1.jpg' },
    { id: 6, name: 'Frank Miller', rating: 1, text: 'Very disappointed, the service did not meet my expectations. There were numerous issues, and I felt that my concerns were not adequately addressed.', profilePicture: 'https://randomuser.me/api/portraits/men/5.jpg' },
    { id: 7, name: 'Grace Adams', rating: 3, text: 'Average experience, some aspects were good but others were lacking. The service was okay, but there were several areas where it could be improved.', profilePicture: 'https://randomuser.me/api/portraits/women/2.jpg' },
    { id: 8, name: 'Hannah Davis', rating: 5, text: 'Fantastic service, will definitely recommend to others. The staff was attentive and the quality of work was superb. Exceeded my expectations in every way.', profilePicture: 'https://randomuser.me/api/portraits/women/3.jpg' },
    { id: 9, name: 'Ian Clark', rating: 2, text: 'Service was not up to the mark. Expected more in terms of quality and responsiveness. Communication was a major issue, and the final result was subpar.', profilePicture: 'https://randomuser.me/api/portraits/men/6.jpg' },
    { id: 10, name: 'Jack Martin', rating: 4, text: 'Very good service, met all my requirements. The team was courteous and professional, although there were a few minor issues that were quickly resolved.', profilePicture: 'https://randomuser.me/api/portraits/men/7.jpg' },
    { id: 11, name: 'Kylie Turner', rating: 5, text: 'Excellent! Everything was perfect and on time. The service provided was beyond my expectations and I am extremely satisfied with the results.', profilePicture: 'https://randomuser.me/api/portraits/women/4.jpg' },
    { id: 12, name: 'Liam Walker', rating: 3, text: 'Good service but could use some improvements. The overall experience was fine, but there were several aspects that need enhancement for better customer satisfaction.', profilePicture: 'https://randomuser.me/api/portraits/men/8.jpg' },
    { id: 13, name: 'Mia Scott', rating: 4, text: 'Great experience, I would use this service again. The quality was good, and the staff was friendly. A few minor issues were resolved promptly.', profilePicture: 'https://randomuser.me/api/portraits/women/5.jpg' },
    { id: 14, name: 'Noah Lewis', rating: 2, text: 'The service did not meet my expectations. There were delays and the final result was not what I was hoping for. I would not recommend it based on my experience.', profilePicture: 'https://randomuser.me/api/portraits/men/9.jpg' },
    { id: 15, name: 'Olivia Harris', rating: 5, text: 'Absolutely wonderful service, highly recommended! The entire process was smooth, and the results were fantastic. The team went above and beyond to ensure satisfaction.', profilePicture: 'https://randomuser.me/api/portraits/women/6.jpg' },
    { id: 16, name: 'Paul Turner', rating: 4, text: 'Good service with minor issues. The team was professional, but there were a couple of small delays. Overall, I am happy with the outcome and would use this service again.', profilePicture: 'https://randomuser.me/api/portraits/men/10.jpg' },
    { id: 17, name: 'Quinn Adams', rating: 5, text: 'Exceptional service! Everything was handled with utmost professionalism. The result was perfect and the team was very accommodating throughout the process.', profilePicture: 'https://randomuser.me/api/portraits/women/7.jpg' },
    { id: 18, name: 'Rachel Green', rating: 3, text: 'The service was okay. There were some good aspects but also areas that need improvement. I think there is potential for a better overall experience.', profilePicture: 'https://randomuser.me/api/portraits/women/8.jpg' },
    { id: 19, name: 'Steve Wilson', rating: 2, text: 'Below expectations. The service was inconsistent and lacked attention to detail. Communication could have been much better. Not satisfied with the final result.', profilePicture: 'https://randomuser.me/api/portraits/men/11.jpg' },
    { id: 20, name: 'Tina Roberts', rating: 4, text: 'Very pleased with the service. The quality was good and the team was responsive. There were a few minor hiccups but they were handled well.', profilePicture: 'https://randomuser.me/api/portraits/women/9.jpg' },
    { id: 21, name: 'Ulysses Grant', rating: 1, text: 'Terrible service. I faced numerous issues and the response was very poor. Not recommended. The service did not live up to the promises made.', profilePicture: 'https://randomuser.me/api/portraits/men/12.jpg' },
    { id: 22, name: 'Vera Simmons', rating: 5, text: "Incredible experience! The service was top-notch from start to finish. The team's dedication and attention to detail were evident in the final outcome.", profilePicture: 'https://randomuser.me/api/portraits/women/10.jpg' },
    { id: 23, name: 'Will Thompson', rating: 3, text: 'Average service. Some elements were good, but there were significant issues that affected my overall experience. Improvements needed in several areas.', profilePicture: 'https://randomuser.me/api/portraits/men/13.jpg' },
    { id: 24, name: 'Xena Williams', rating: 4, text: 'Very satisfied with the service provided. The staff was friendly and the work was done efficiently. Minor delays were communicated well.', profilePicture: 'https://randomuser.me/api/portraits/women/11.jpg' },
    { id: 25, name: 'Yvonne Carter', rating: 5, text: 'Exceptional quality and service. I am extremely happy with the results. The team was professional, and the entire process was handled with great care and efficiency.', profilePicture: 'https://randomuser.me/api/portraits/women/12.jpg' },
  ];


  return (
    <div className='md:px-5 px-[15px] mb-5'>
      <h2 className='font-bold text-xl text-white my-5'>Dashboard</h2>
      <div className='grid grid-cols-1  md:grid-cols-[60%_auto] lg:grid-cols-[65%_auto] gap-5 2xl:gap-8 items-stretch'>
        {/* Statics Box */}
        <div className='rounded-md'>
          <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 h-full'>
            {statics.map((item, key) => {
              // Determine the stats color and icon based on value
              const statsColor = item.stats >= 0 ? 'text-[#01be86]' : 'text-[#e74c3c]';
              const ArrowIcon = item.stats >= 0 ? RiArrowDropUpFill : RiArrowDropDownFill;
              return (
                <div className='bg-[#202028] p-4 rounded-md h-full'>
                  <div style={{ backgroundColor: item.bgcolor }} className="rounded-xl p-3 w-[45px] mb-1">
                    <img src={`/Icons/${item.icon}.svg`} width={30} height={30} alt={item.icon} /></div>
                  <p className='text-gray-300 mb-3 font-semibold text-[12px]'>{item.title}</p>
                  <div className='flex justify-between items-center'>
                    <div className='text-white font-bold text-3xl'>{item.count}</div>
                    <div className='flex items-center'>
                      <span className={` ${statsColor} font-bold`}><ArrowIcon size={30} /></span>
                      <span className={`${statsColor} text-[14px] font-bold`}>{Math.abs(item.stats)}%</span>
                    </div>
                  </div>
                </div>);
            })}
          </div>
        </div>
        {/* Statics end */}

        {/* Progress bar  */}
        <div className='bg-[#202028] p-4 rounded-md'>
          <div className='grid grid-cols-[60%_auto] sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-[60%_auto] items-center lg:h-auto '>
            <div className='flex flex-col justify-between md:order-2 lg:order-2 md:h-1/2 md:mt-1 lg:h-fit lg:mt-0'>
              <p className='text-gray-300 font-semibold text-[14px]'>Net Profit</p>
              <p className='text-white text-2xl font-bold my-3'>$ 6759.25</p>
              <div class="flex items-center">
                <span class="text-[#66d74f] font-bold"><RiArrowDropUpFill size={30} /></span>
                <span class="text-[#66d74f] text-[14px] font-bold">3%</span>
              </div>
            </div>
            <div className='  md:order-1 lg:order-2'>
              <div className='flex flex-col items-center '>
                <div className='w-[96px] md:w-[110px] lg:w-[100px] h-[105px] md:h-[110px] lg:h-[96px] mb-2'>
                  <CircularProgressbarWithChildren value={70} styles={buildStyles({
                    pathColor: '#7294ff',
                    trailColor: '#2a3268',
                    backgroundColor: 'red',

                  })} >
                    <div>
                      <p className='text-white text-center font-bold text-xl'>{percentage}%</p>
                      <p className='text-gray-400 text-[10px] text-center'>Goal <br /> Completed</p>
                    </div>
                  </CircularProgressbarWithChildren>
                </div>
              </div>
              <p className='text-gray-300 font-semibold text-[8px] text-center w-full'>*The Value has been rounded off.</p>
            </div>
          </div>
        </div>
        {/* Progress bar end  */}

        {/* Activity */}
        <div className='bg-[#202028] p-4 rounded-md'>
          <div className='flex justify-between items-center'>
            <h2 className='text-white text-xl font-bold'>Activity</h2>
            <div>
              <div class="dropdown inline-block relative text-center">
                <button class="rounded-3xl px-3 text-sm text-white bg-[#4c4d52] p-1 font-semibold  inline-flex items-center">
                  <span className='ml-3 text-gray-300'>Weekly</span>
                  <span className='arw-icon text-gray-300'><RiArrowDropDownFill size={30} />  </span>
                </button>
                <ul class="dropdown-menu left-[-20%] absolute px-5 hidden text-gray-700 pt-2">
                  <li class=""><a class="rounded-t-lg bg-[#4c4d52] text-md text-white hover:bg-gray-400 py-2 w-[120px] block whitespace-no-wrap" href="#">Daily</a></li>
                  <li class=""><a class="bg-[#4c4d52] hover:bg-gray-400 text-md text-white py-2 px-4 block whitespace-no-wrap" href="#">Monthly</a></li>
                  <li class=""><a class="rounded-b-lg bg-[#4c4d52] text-md text-white hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Yearly</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className='w-full h-[220px] rounded-2xl'>
            <Bar data={weeklyData} options={weeklyOptions} />
          </div>
        </div>
        {/* Activity */}

        {/* Goal */}
        <div className='bg-[#202028] p-4 rounded-md'>
          <div className='flex justify-between items-center mb-5 mt-2 mx-2'>
            <div className='flex items-center'>
              <div className='bg-[#5f3237]  rounded-full p-[18px]'><img height={30} width={30} src="/Icons/goal.svg" alt="goal" /></div>
              <p className='text-[#d0d0d5] ml-3 font-semibold text-md'>Goals</p>
            </div>
            <div className='bg-[#47484d] rounded-full p-1'><RiArrowRightSLine size={22} color='white' /></div>
          </div>

          <div className='flex justify-between items-center mb-5 mx-2'>
            <div className='flex items-center'>
              <div className='bg-[#293368]  rounded-full p-[18px]'><img height={30} width={30} src="/Icons/dishes.svg" alt="goal" /></div>
              <p className='text-[#d0d0d5] ml-3 font-semibold text-md'>Popular Dishes</p>
            </div>
            <div className='bg-[#47484d] rounded-full p-1'><RiArrowRightSLine size={22} color='white' /></div>
          </div>

          <div className='flex justify-between items-center mx-2'>
            <div className='flex items-center'>
              <div className='bg-[#214a60]  rounded-full p-[18px]'><img height={30} width={30} src="/Icons/menu.svg" alt="goal" /></div>
              <p className='text-[#d0d0d5] ml-3 font-semibold text-md'>Menus</p>
            </div>
            <div className='bg-[#47484d] rounded-full p-1'><RiArrowRightSLine size={22} color='white' /></div>
          </div>

        </div>
        {/* Goal */}

        {/* Recent Orders */}
        <div className='bg-[#202028] p-4 rounded-md'>
          <h2 className='text-white text-xl font-bold mb-1'>Recent Orders</h2>
          <table className=" leading-normal overflow-x-auto h-1/4 w-full text-white">
            <thead className=''>
              <tr>
                <th
                  className="py-3 border-b-2 text-left border-[#24242c] w-[32%] md:w-1/4 text-sm font-semibold text-[#e2e0e7] capitalize"
                >
                  Customer
                </th>
                <th
                  className="py-3 border-b-2 text-center text-nowrap  border-[#24242c] w-[20%]  md:w-1/4 text-sm font-semibold text-[#e2e0e7] capitalize"
                >
                  Order No.
                </th>
                <th
                  className="py-3 border-b-2 text-center border-[#24242c] w-[20%]  md:w-1/4 text-sm font-semibold text-[#e2e0e7] capitalize "
                >
                  Amount
                </th>
                <th
                  className="py-3 border-b-2 text-center border-[#24242c] w-[20%]  md:w-1/4 text-sm font-semibold text-[#e2e0e7] capitalize tracking-wider"
                >
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {order.map((items, index) =>
                <tr key={index}>
                  <td className={`py-3 ${index === order.length - 1 ? "" : "border-b-2 border-[#24242c]"} `}>
                    <span className='flex gap-2 items-center'>
                      <span className=''><img className='rounded-full h-[30px] w-[30px] object-cover' height={30} width={30} src={items.cprofile} alt="" srcset="" /></span>
                      <span className='capitalize text-[10px] md:text-xs font-semibold text-[#c9c8cc]'>{items.cname}</span>
                    </span>
                  </td>
                  <td className={`py-3 ${index === order.length - 1 ? "" : "border-b-2 border-[#24242c]"}  text-center capitalize text-[10px] md:text-xs font-semibold text-[#c9c8cc]`}>
                    <p className="whitespace-no-wrap">{items.orderNo}</p>
                  </td>
                  <td className={`py-3 ${index === order.length - 1 ? "" : "border-b-2 border-[#24242c]"}  text-center capitalize text-[10px] md:text-xs font-semibold text-[#c9c8cc]`}>
                    <p className="whitespace-no-wrap">{items.amt}</p>
                  </td>
                  <td className={`py-3 ${index === order.length - 1 ? "" : "border-b-2 border-[#24242c]"}  text-center capitalize text-[10px] md:text-xs font-semibold`}>
                    <span
                      className={`relative inline-block px-2 md:px-3 py-1 font-semibold ${items.status === "Delivered" ? 'text-[#099970]' : "text-[#a9494b]"} leading-tight`}
                    >
                      <span
                        aria-hidden
                        className={`absolute inset-0 ${items.status === "Delivered" ? 'bg-[#1e7362]' : "bg-[#5d3139]"} opacity-50 rounded-full`}
                      ></span>
                      <span className="relative">{items.status}</span>
                    </span>
                  </td>
                </tr>

              )}

            </tbody>
          </table>
        </div>
        {/* Recent Orders */}

        {/* Customer's Feedback */}
        <div className='bg-[#202028] ps-4 py-4 rounded-md'>
          <h2 className='text-white text-xl font-bold mb-1'>Customer's Feedback</h2>
          <div className='h-[380px] customer-review overflow-y-auto pr-4 overflow-x-hidden'>
            {user_rating.map((item, index) =>
              <div className='border-b-2 border-[#24242c] py-3' key={index}>
                <span className='flex gap-2 items-center'>
                  <span className=''><img className='rounded-full h-[30px] w-[30px] object-cover' height={40} width={40} src={item.profilePicture} alt="" srcset="" /></span>
                  <span className='capitalize text-sm font-semibold text-[#e8e7eb]'>{item.name}</span>
                </span>
                <div className='flex my-1 -mx-[2px]'>
                  {[1, 2, 3, 4, 5].map(star => (
                    <img height={20} width={20} src={`/Icons/${star <= item.rating ? 'fillstar' : 'emptystar'}.svg`} alt="" />
                  ))} </div>
                <p className='text-[#88888b] font-semibold text-sm'>{item.text}</p>
              </div>)}

          </div>
        </div>
      </div>

    </div>
  )
}
export default Dashboard
