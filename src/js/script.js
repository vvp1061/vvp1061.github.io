let optimalCIC = null;
let computedValue = null;
let optimalLagrange = null;

function calculateCoefficients() {
    const fs = 61.44e6;
    const baudRateInput = document.getElementById("baudRate").value;
    const targetBaudRate = parseFloat(baudRateInput) * 1e6;

    if (isNaN(targetBaudRate) || targetBaudRate <= 0) {
        alert("Пожалуйста, введите числовое значение для бодовой скорости.");
        return;
    }

    optimalCIC = null;
    optimalLagrange = null;
    let minLagrange = Infinity;

    const fsDiv2 = fs / 2;

    for (let cic = 128; cic >= 4; cic--) {
        const lagrange = fsDiv2 / (cic * targetBaudRate);
        if (lagrange >= 1 && lagrange <= 16 && lagrange < minLagrange) {
            optimalCIC = cic;
            optimalLagrange = lagrange;
            minLagrange = lagrange;
            computedValue = Math.floor((1 / lagrange) * Math.pow(2, 30));
        }
    }

    const outputBlock = document.getElementById("outputBlock");
    const outputValue = document.getElementById("outputValue");
    const cicBlock = document.getElementById("cicBlock");
    const ratioBlock = document.getElementById("ratioBlock");
    const cicValue = document.getElementById("cicValue");
    const ratioValue = document.getElementById("ratioValue");

    if (optimalCIC !== null && optimalLagrange !== null) {
        outputValue.textContent = optimalLagrange.toFixed(15);
        cicValue.textContent = optimalCIC;
        ratioValue.textContent = computedValue;

        outputBlock.style.display = "block";
        cicBlock.style.display = "block";
        ratioBlock.style.display = "block";
    } else {
        outputBlock.style.display = "none";
        cicBlock.style.display = "none";
        ratioBlock.style.display = "none";
        alert("Подходящие коэффициенты не найдены.");
    }
}

function copyToClipboard(type) {
    let text;
    if (type === 'output') {
        text = optimalLagrange.toFixed(15);
    } else {
        text = type === 'cic' ? optimalCIC : computedValue;
    }
    navigator.clipboard.writeText(text.toString());
}
