import { Bar } from 'react-chartjs-2';

const data = {
    labels: ['C# & .Net Core', 'JS & NodeJs', 'React.js & Next.js', "HTML/CSS", 'Vue.js', 'SQL/NoSQL', 'Typescript', 'Flutter/Dart', 'Python', 'PHP Laravel', 'Java', 'Swift'],
    datasets: [
        {
            label: 'My Language-Based Experience',
            data: [100, 100, 100, 100, 95, 95, 90, 90, 75, 75, 60, 30],
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
    responsive: window.innerWidth > 767 ? false : true,
    
    animation: {
        duration: 0
    },
    plugins: {
        legend: {
            display: false,
        }
    },
    indexAxis: 'y',
    scales: {
        x:
        {
            ticks: {
                autoSkip: false,
                callback: function (value, index) {
                    return labels[value]
                }
            },
        },
        y: {
            ticks: {
                autoSkip: false,
            }
        }
    },
};

function Chart() {

    return (<div className="self-center items-center flex flex-col md:p-20 flex-grow relative w-screen">
        <div className="text-white text-center md:text-3xl mb-5 oswald">My Language-Based Experience</div>
        <Bar
            width={window.innerWidth > 767 ? window.innerWidth * .5 : null}
            height={window.innerWidth > 767 ? window.innerHeight * .5 : null}
            data={data}
            options={options}
        >

        </Bar>
    </div>)
}

export default Chart;