
document.getElementById('name_button').onclick = saveName;


function saveName() {
    let name = document.getElementById('name_input');
    let name_zone = document.getElementById("name_text");
    if ((name.value != "")&&(name.value != " ")) {
        name_zone.style.display = (name_zone.style.display == 'inline') ? '' : 'inline';
    name_zone.innerText = name.value;
    localStorage.setItem('name', name.value);
    }    
}

if (localStorage.getItem('name') != null) {
    document.getElementById("name_text").style.display = 'inline';
    document.getElementById('name_text').textContent = localStorage.getItem('name');
}

document.getElementById('area_button').onclick = countArea;

function countArea() {
    let osn = document.getElementById('osn').value;
    let height = document.getElementById('height').value;

    if ((osn > 0)&&(height > 0)) {
        let res = 0.5 * osn * height;
        let area_zone = document.getElementById('area_res');
        area_zone.style.display = 'inline';
        area_zone.innerText = res;
    } else if ((osn == "")&&(height == "")) {
        let area_zone = document.getElementById('area_res');
        area_zone.style.display = 'inline';
        area_zone.innerText = "Введите числа!";
    } else {
        let area_zone = document.getElementById('area_res');
        area_zone.style.display = 'inline';
        area_zone.innerText = "Числа должны быть положительными!";
    }


}

let modal1 = document.getElementById('modal1');
let modal2 = document.getElementById('modal2');
let modal3 = document.getElementById('modal3');
let modal4 = document.getElementById('modal4');
let modal5 = document.getElementById('modal5');
let modal6 = document.getElementById('modal6');
let modal7 = document.getElementById('modal7');
let btn1 = document.getElementById('change_name');
let btn2 = document.getElementById('triangle');
let btn3 = document.getElementById('mas');
let btn4 = document.getElementById('timer');
let btn5 = document.getElementById('test');
let btn6 = document.getElementById('relax');
let btn7 = document.getElementById('str');

btn1.onclick = function () {
    modal1.style.display = "block";
    document.body.style.overflow = "hidden";
}

btn2.onclick = function () {
    modal2.style.display = "block";
    document.body.style.overflow = "hidden";
}

btn3.onclick = function () {
    modal3.style.display = "block";
    document.body.style.overflow = "hidden";
}

btn5.onclick = function () {
    modal5.style.display = "block";
    document.body.style.overflow = "hidden";
}

btn4.onclick = function () {
    modal4.style.display = "block";
    document.body.style.overflow = "hidden";
}

btn6.onclick = function () {
    modal6.style.display = "block";
    document.body.style.overflow = "hidden";
    let now = new Date();
    document.getElementById("date").innerText = now.getDate() + "." + (now.getMonth() + 1) + "." + now.getFullYear();
    document.getElementById("user").innerText = "Have a good day, " + document.getElementById("name_text").innerText;
}

btn7.onclick = function () {
    modal7.style.display = "block";
    document.body.style.overflow = "hidden";
}

window.onclick = function (event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
    }
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
    if (event.target == modal3) {
        modal3.style.display = "none";
    }
    if (event.target == modal4) {
        modal4.style.display = "none";
    }
    if (event.target == modal5) {
        modal5.style.display = "none";
    }
    if (event.target == modal7) {
        modal7.style.display = "none";
    }
}

modal6.onclick = function(event) {
    modal6.style.display = "none";
    document.body.style.overflow = "auto";
}

document.getElementById('mas_btn').onclick = countMinMax;

function countMinMax() {
    let arr = [];
    for (let i = 0; i < 5; i++) {
        arr[i] = Number(document.getElementById("mas_input" + (i+1)).value);
    }
    let nan = 0;
    for (let i = 0; i < arr.length; i++) {
        if (isNaN(arr[i])) {
            nan += 1;
        }  
    }

    let max_zone = document.getElementById('max');
    let min_zone = document.getElementById('min');

    if (nan > 0) {
        max_zone.innerText = "Введите числа!";
    } else {
        let max = arr[0];
        let min = arr[0];
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > max) max = arr[j];
            if (arr[j] < min) min = arr[j];
        }
        max_zone.innerText = "Максимальный элемент — " + max;
        min_zone.innerText = "Минимальный элемент — " + min;
    }  
}


document.getElementById('start_btn').onclick = startTimer;

let sec = 0, min = 0, hour = 0, stopS, stopM, stopH;
let timerId

function startTimer() {
    timerId = setInterval(tick, 1000);  
}
            
function tick() {
    let timer_zone = document.getElementById('timer_text');
    sec++;
    if (sec >= 60) {
        min++;
        sec = sec - 60;
    }
    if (min >= 60) {
        hour++;
        min = min - 60;
    }

    if (sec < 10) {
        if (min < 10) {
            if (hour < 10) {
                timer_zone.innerText ='0' + hour + ':0' + min + ':0' + sec;
            } else {
                timer_zone.innerText = hour + ':0' + min + ':0' + sec;
            }
        } else {
            if (hour < 10) {
                timer_zone.innerText = '0' + hour + ':' + min + ':0'+ sec;
            } else {
                timer_zone.innerText = hour + ':' + min + ':0' + sec;
            }
        }
    } else {
        if (min < 10) {
            if (hour < 10) {
                timer_zone.innerText = '0' + hour + ':0' + min + ':' + sec;
            } else {
                timer_zone.innerText = hour + ':0' + min + ':' + sec;
            }
        } else {
            if (hour < 10) {
                timer_zone.innerText = '0' + hour + ':' + min + ':' + sec;
            } else {
                timer_zone.innerText = hour + ':' + min + ':' + sec;
            }
        }
    }
}

document.getElementById('stop_btn').onclick = stopTimer;

function stopTimer() {
    clearTimeout(timerId);
    stopS = sec;
    stopM = min;
    stopH = hour;
}

document.getElementById('restart_btn').onclick = restartTimer;

function restartTimer() {
    hour = 0;
    min = 0;
    sec = 0;
    let timer_zone = document.getElementById('timer_text');
    timer_zone.innerText = "00:00:00";
}

function toFindTime() {
    let startS, startM, startH;
    
    if (sec < 10) {
        if (min < 10) {
            if (hour < 10) {
                timer_zone.innerText ='0' + hour + ':0' + min + ':0' + sec;
            } else {
                timer_zone.innerText = hour + ':0' + min + ':0' + sec;
            }
        } else {
            if (hour < 10) {
                timer_zone.innerText = '0' + hour + ':' + min + ':0'+ sec;
            } else {
                timer_zone.innerText = hour + ':' + min + ':0' + sec;
            }
        }
    } else {
        if (min < 10) {
            if (hour < 10) {
                timer_zone.innerText = '0' + hour + ':0' + min + ':' + sec;
            } else {
                timer_zone.innerText = hour + ':0' + min + ':' + sec;
            }
        } else {
            if (hour < 10) {
                timer_zone.innerText = '0' + hour + ':' + min + ':' + sec;
            } else {
                timer_zone.innerText = hour + ':' + min + ':' + sec;
            }
        }
    }

}

document.getElementById('test_btn').onclick = testResults;

function testResults() {
    let count = 0;
    let q1 = document.getElementsByName('que1');

    q1.forEach(function(i) {
        if ((i.value == "i")&&(i.checked)) {
            document.getElementById("q1_r").style.color = 'green';
            document.getElementById("q1_r").innerText = "верно";
            count += 1;
        } 
        if ((i.value != "i")&&(i.checked)){
            document.getElementById("q1_r").style.color = 'red';
            document.getElementById("q1_r").innerText = "не верно";
        }
    })

    

    let q2 = document.getElementsByName('que2');
    q2.forEach(function(i) {
        if ((i.value == "11100")&&(i.checked)) {
            document.getElementById("q2_r").style.color = 'green';
            document.getElementById("q2_r").innerText = "верно";
            count += 1;
        } if ((i.value != "11100")&&(i.checked)){
            document.getElementById("q2_r").style.color = 'red';
            document.getElementById("q2_r").innerText = "не верно";
        }
    })

    let q3 = document.getElementsByName('que3');
    q3.forEach(function(i) {
        if ((i.value == "pkm")&&(i.checked)) {
            document.getElementById("q3_r").style.color = 'green';
            document.getElementById("q3_r").innerText = "верно";
            count += 1;
        } if ((i.value != "pkm")&&(i.checked)){
            document.getElementById("q3_r").style.color = 'red';
            document.getElementById("q3_r").innerText = "не верно";
        }
    })

    let q4 = document.getElementsByName('que4');
    q4.forEach(function(i) {
        if ((i.value == "inp")&&(i.checked)) {
            document.getElementById("q4_r").style.color = 'green';
            document.getElementById("q4_r").innerText = "верно";
            count += 1;
        } if ((i.value != "inp")&&(i.checked)){
            document.getElementById("q4_r").style.color = 'red';
            document.getElementById("q4_r").innerText = "не верно";
        }
    })

    let q5 = document.getElementsByName('que5');
    q5.forEach(function(i) {
        if ((i.value == "rad")&&(i.checked)) {
            document.getElementById("q5_r").style.color = 'green';
            document.getElementById("q5_r").innerText = "верно";
            count += 1;
        } if ((i.value != "rad")&&(i.checked)){
            document.getElementById("q5_r").style.color = 'red';
            document.getElementById("q5_r").innerText = "не верно";
        }
    })
    document.getElementById("test_reszone").innerText = count + "/5";
}

document.getElementById('str_btn').onclick = strFoo;

function strFoo() {
    let v1 = document.getElementById("str_input1").value;
    let v2 = document.getElementById("str_input2").value;
    let res = document.getElementById("str_reszone")
    if (v1 == v2) {
        res.innerText = "true";
    } else {
        res.innerText = "false";
    }
}
