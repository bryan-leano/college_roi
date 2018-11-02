//college roi


document.querySelector('.btn-calculate').addEventListener('click', function() {
  universityInput = document.querySelector('.university').value;
  majorInput = document.querySelector('.major').value;
  financialAidInput = document.querySelector('.financial-aid').value;
  preCollegeSalary = document.querySelector('.pre-college-salary').value;

  if ( universityInput && majorInput && financialAidInput && preCollegeSalary ) {
    collegeTuition();
    majorSalary();
  } else {
    console.log('Please input all values!');
  };
});

function collegeTuition() {
  if ( universityInput === 'Harvard' ) {
    collegeTotalCost = (67580 * 4);
    
  } else if ( universityInput === 'Utah' ) {
    collegeTotalCost = (23613 * 4);
  } else if ( universityInput === 'NYU' ) {
    collegeTotalCost = (71000 * 4);
  } else if ( universityInput === 'Washington' ) {
    collegeTotalCost = (26595 * 4);
  } else if ( universityInput === 'Boise State' ) {
    collegeTotalCost = (21932 * 4);
  } else if ( universityInput === 'BYU' ) {
    collegeTotalCost = (18060 * 4);
  } else {
    console.log('Please enter a listed university!');
  }
};

function majorSalary() {
  if ( majorInput === 'Computer Science' ) {
    postCollegeSalary = 103160;
  } else if ( majorInput === 'Economics' ) {
    postCollegeSalary = 109230;
  } else if ( majorInput === 'Philosophy' ) {
    postCollegeSalary = 75600;
  } else if ( majorInput === 'Communication' ) {
    postCollegeSalary = 52286;
  } else if ( majorInput === 'Chemistry' ) {
    postCollegeSalary = 69800; 
  } else if ( majorInput === 'Basket Weaving' ) {
    postCollegeSalary = 35000;
  } else {
    console.log('Please enter a listed major!');
  }
};
