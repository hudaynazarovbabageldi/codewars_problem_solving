console.log("hey");
// 1-solution
// function domainName(url){
// return url.replace('https://', '').replace('http://', '').replace('www.','').split('.')[0]
// }

// 2-solution:
function domainName(url) {
  const match = url.match(/(?:https?:\/\/)?(?:www\.)?([^\.]+)/);

  return match ? match[1] : "";
}

console.log(domainName("https://google.ru"));
