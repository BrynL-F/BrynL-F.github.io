function copy() {
  var element = document.getElementById('copy-site-url');

  element.select();
  document.execCommand('copy');
  element.blur();
}