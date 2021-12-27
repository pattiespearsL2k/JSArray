var numArray = [];
document.getElementById("btnAdd").onclick = function () {

    var num = Number(document.getElementById("number").value);
    numArray.push(num);
    document.getElementById("show").innerHTML = "=> Các số đã thêm vào mảng: " + numArray;

}


// BÀI 1: TỔNG SỐ DƯƠNG
function CalPositive() {
    var sum = 0;
    for (var i = 0; i <= numArray.length; i++) {
        if (numArray[i] >= 1) {
            sum += numArray[i];
        }
    }
    document.getElementById("b1").innerHTML = "Tổng số dương: " + sum;
}

document.getElementById("btnb1").onclick = CalPositive;


// BÀI 2: ĐẾM SỐ DƯƠNG
function CountPositive() {
    var count = 0;
    for (var i = 0; i <= numArray.length; i++) {
        if (numArray[i] >= 1) {
            count++
        }
    }
    document.getElementById("b2").innerHTML = "Số lượng số dương: " + count;
}

document.getElementById("btnb2").onclick = CountPositive;


// BÀI 3: TÌM SỐ NHỎ NHẤT
function FindMin() {
    var min = numArray[0];
    for (var i = 0; i <= numArray.length; i++) {
        if (numArray[i] < min) {
            min = numArray[i];
        }
    }
    document.getElementById("b3").innerHTML = "Số nhỏ nhất: " + min;
}

document.getElementById("btnb3").onclick = FindMin;


// BÀI 4: TÌM SỐ DƯƠNG NHỎ NHẤT
function FindPositiveMin() {
    var text = "";
    var newArray = [];

    for (var i = 0; i <= numArray.length; i++) {
        if (numArray[i] >= 1) {
            newArray.push(numArray[i]);
            console.log(newArray);
        }
    }

    var min = newArray[0];
    if (newArray.length === 0) {
        text = "Không có số dương trong mảng";
    }
    else {
        for (var i = 0; i <= newArray.length; i++) {
            if (newArray[i] < min) {
                min = newArray[i];
            }
            text = min;
        }
    }
    document.getElementById("b4").innerHTML = text;
}

document.getElementById("btnb4").onclick = FindPositiveMin;


// BÀI 5: TÌM SỐ CHẴN CUỐI CÙNG

function FindLastEven() {
    var lastEven = "";
    for (var i = numArray.length; i >= 0; i--) {
        if (numArray[i] != 0) {
            if (numArray[i] % 2 == 0) {
                lastEven = numArray[i];
                break;
            }
            else {
                lastEven = "Không có số chẵn"
            }
        }

    }
    document.getElementById("b5").innerHTML = lastEven;
}

document.getElementById("btnb5").onclick = FindLastEven;

// BÀI 7: SẮP XẾP TĂNG DẦN
function SortAs() {
    var tg;
    for (var i = 0; i < numArray.length - 1; i++) {
        for (var j = i + 1; j < numArray.length; j++) {
            if (numArray[i] > numArray[j]) {
                tg = numArray[i];
                numArray[i] = numArray[j];
                numArray[j] = tg;
            }
        }
    }
    document.getElementById("b7").innerHTML = "Sắp xếp: " + numArray;
}

document.getElementById("btnb7").onclick = SortAs;

// BÀI 8: TÌM SỐ NGUYÊN TỐ ĐẦU TIÊN

function isPrime(n) {
    if (n > 1) {
        for (var i = 2; i < n; i++) {
            if (n % i == 0) return false;
        }
        return true;
    }
    else
        return false;

}
function FindFirstPrime() {
    var newArray = [];
    for (var i = 0; i <= numArray.length; i++) {
        if (isPrime(numArray[i])) {
            newArray.push(numArray[i]);
        }
    }
    console.log(newArray);
    document.getElementById("b8").innerHTML = newArray[0];
}

document.getElementById("btnb8").onclick = FindFirstPrime;

// BÀI 9: ĐẾM SỐ NGUYÊN
function CountInt() {
    var count = 0;
    for (var i = 0; i < numArray.length; i++) {
        if (Number.isInteger(numArray[i]))
            count++;

    }
    if (count == 0) { count = "Không có số nguyên trong mảng" };
    document.getElementById("b9").innerHTML = count;
}

document.getElementById("btnb9").onclick = CountInt;

// BÀI 10: SO SÁNH SỐ LƯỢNG SỐ ÂM VÀ DƯƠNG

function Compare() {
    var text = "";
    var positiveNum = 0;
    var negativeNum = 0;
    for (var i = 0; i < numArray.length; i++) {
        if (numArray[i] > 0)
            positiveNum++;
    }
    negativeNum = numArray.length - positiveNum;

    if (positiveNum < negativeNum) { text = "Số dương < số âm" }
    else if (positiveNum > negativeNum) {
        text = "Số dương > số âm"
    }
    else {
        text = "Số dương = số âm";
    }

    document.getElementById("b10").innerHTML = text;
}

document.getElementById("btnb10").onclick = Compare;