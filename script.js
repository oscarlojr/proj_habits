const form = document.querySelector('#form-habits');
const nlwSetup = new NLWSetup(form);

const data = {
  run: ['01-02','01-04','01-05','01-07'],
  news: ['01-05','01-02'],
  gym: ['01-04','01-06','01-07'],
}

nlwSetup.setData(data);
nlwSetup.load();