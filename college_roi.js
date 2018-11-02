//college roi


document.querySelector('.btn-calculate').addEventListener('click', function() {
  universityInput = document.querySelector('.university').value;
  majorInput = document.querySelector('.major').value;
  financialAidInput = document.querySelector('.financial-aid').value;
  preCollegeSalary = document.querySelector('.pre-college-salary').value;

  if ( universityInput && majorInput && financialAidInput && preCollegeSalary ) {
    console.log('Good job!');
  } else {
    console.log('Please input all values!');
  };
});