import { Bar } from 'react-chartjs-2';

const data = {
    labels: ['PWA', 'WebSocket', 'AJAX', 'API system', 'Web Scrapping', 'Payment system', 'Canvas', 'Firebase', 'Unity', 'WordPress'],
    datasets: [
        {
            label: 'My App-Based Experience',
            data: [100, 100, 100, 100, 100, 95, 85, 85, 80, 75],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
        },
    ],
};

const labels = { 0: 'Poor', 50: 'Good', 100: 'Excellent' }

const options = {
    animation: {
        duration: 0
    },
    plugins: {
        legend: {
            display: false,
        }
    },
    indexAxis: 'x',
    responsive: window.innerWidth > 767 ? false : true,
    scales: {
        y:
        {
            ticks: {
                autoSkip: false,
                callback: function (value, index) {
                    return labels[value]
                }
            },
        },
        x: {
            ticks: {
                autoSkip: false,
            }
        }
    },
};
function Appchart() {

    return (<div className="self-center flex flex-col items-center md:p-20 flex-grow relative w-wscreen ">
        <div className="text-white text-center md:text-3xl mb-5 oswald">My App-Based Experience</div>
        <Bar
            width={window.innerWidth > 767 ? window.innerWidth * .5 : null}
            height={window.innerWidth > 767 ? window.innerHeight * .5 : null}
            data={data}
            options={options}
        >

        </Bar>
    </div>)
}

export default Appchart;