// let arr = ['aa', 'vv'];
// let obj = {
//     name: 'nn',
//     city: 'pp',
//     getIntro: function() {
//         console.log(this.name + " "+ this.city);
//     }
// }

// let groupby = {
//     title: "Our Group",
//     students: ["John", "Pete", "Alice"],
  
//     showList() {
//       this.students.forEach(
//        function(student) {
//            alert(this.title + ': ' + student)
//         }
//       );
//     }
//   };
//   let group2 = {
//     title: "Our Group1",
//     students: ["John1", "Pete1", "Alice1"]};
//   let aby = groupby.showList.bind(group2);
//   aby();


let obj = {
    x: 1,
    y: function(){
        console.log('inside Y---', this.x);
        const z =  () => {
            console.log('inside z  x,a ---', this.x);
            const q = () => {
                console.log('inside z x,b,a---', this.x);
            }
            q();
        }
        z();
    }
}

obj.y();