module.exports = function solveEquation(equation) {
  	equation=equation.replace(/\s/g, "");
        function root(k){
                n=equation.match(/[-+]{0,1}\d{1,16}/);
                equation=equation.substring(equation.search("x")+k);
                n=n.join('');
                n=n.replace(/\s/g, "");
                n=parseInt(n);
                return n;
        }
        let a= root(3);
        let b= root(1);
        let c= root(0);
        let d=b*b-4*a*c;
		let roots=[];
        roots[0]=Math.round((-b+Math.sqrt(d))/(2*a));
        roots[1]=Math.round((-b-Math.sqrt(d))/(2*a));
		if (roots[1]<roots[0]){
			let k=roots[0];
			roots[0]=roots[1];
			roots[1]=k;
		}
	return roots;
}
