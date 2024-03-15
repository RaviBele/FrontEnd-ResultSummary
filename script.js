
function get_data() {
    fetch('./data.json').then((res) => {
        if (!res.ok)  {
            console.error('Invalid data path: ' + res.path);
        }
        return res.json();
    }).then((data) => {
        let final_score = 0;

        for (let i = 0; i < data.length; i++) {
            document.querySelector(`.${data[i].category.toLowerCase()} .li-item .score-card span`).innerHTML = data[i].score;
            document.querySelector(`.${data[i].category.toLowerCase()}`).style = 'list-style-image: url(' + data[i].icon + ')';
            final_score += data[i].score
        }
        
        final_score = Math.round(final_score/data.length);
        document.querySelector('#score').innerHTML = final_score;
    }).catch((error) => {
        console.error("Unable to fetch data:", error);
    });
}

get_data();