{/* <div class="box-1">
<ul>
  <li>Javascript 1</li>
  <li>PHP 1</li>
</ul>
<p>Test paragraph</p>
</div>

<div class="box-2">
<ul>
  <li>Javascript 2</li>
  <li>PHP 2</li>
</ul>
</div> */}

// var listItemNodes = document.querySelectorAll('.box-1 li')
// console.log(listItemNodes)

var boxNode = document.querySelector('.box-1')

// Công việc 1: Sử dụng tới 'boxNode'
console.log(boxNode)

// Công việc 2: Sử dụng tới các li elements là con của '.box-1'
console.log(boxNode.getElementsByTagName('li'))
console.log(boxNode.querySelector('p'))