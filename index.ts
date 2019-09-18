import './style.css';
// AllAppsDefinitions
const sourceByProp = [];
// provisioning/User
const targetByProp = [];

document.getElementById("populate").addEventListener("click", function () {
  if (document.getElementById('source').value) {
    let array = JSON.parse(document.getElementById('source').value);
    const _selectS = document.getElementById('sourceDD');
    const propsS = Object.keys(array[0]);
    for (var i = 0; i < propsS.length; i++) {
      let el = document.createElement('option');
      el.textContent = propsS[i];
      el.value = propsS[i];
      _selectS.appendChild(el);
    }
  }

  if (document.getElementById('target')) {
    let array = JSON.parse(document.getElementById('target').value);
    const _selectT = document.getElementById('targetDD');
    const propsT = Object.keys(array[0]);
    for (var i = 0; i < propsT.length; i++) {
      let el = document.createElement('option');
      el.textContent = propsT[i];
      el.value = propsT[i];
      _selectT.appendChild(el);
    }
  }
});

document.getElementById("validate").addEventListener("click", function () {
  if (document.getElementById('sourceDD').value && document.getElementById('targetDD').value) {
    let array1 = JSON.parse(document.getElementById('source').value);
    let array2 = JSON.parse(document.getElementById('target').value);
    array1.forEach(sEle => {
      sourceByProp.push(sEle[`${document.getElementById('sourceDD').value}`]);
    })

    array2.forEach(tEle => {
      targetByProp.push(tEle[`${document.getElementById('targetDD').value}`]);
    })
  }

  // checks if array 1 contains all elements of array 2
  let checker = (arr, target) => target.every(v => arr.includes(v));
  console.log(checker(targetByProp, sourceByProp));

  // which elements are not included in array 1 from array 2
  var notInArray = sourceByProp.filter(function (el) {
    return targetByProp.indexOf(el) < 0;
  });
  console.log(notInArray);

  document.getElementById('checkResult').innerHTML = `Elements are the same? $checker(targetByProp, sourceByProp)`;
  document.getElementById('itemsNotIncluded').innerHTML = `Elements: ${notInArray}`;
});

document.getElementById("clear").addEventListener("click", function () {
  document.getElementById('target').value = '';
  document.getElementById('source').value = '';
  document.getElementById('sourceDD').options.length = 1;
  document.getElementById('targetDD').options.length = 1;
  document.getElementById('checkResult').innerHTML = '';
  document.getElementById('itemsNotIncluded').innerHTML = '';
})
