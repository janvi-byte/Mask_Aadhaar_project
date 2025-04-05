function enforceDigits(input) {
    input.value = input.value.replace(/\D/g, '').slice(0, 12); 
}
    function maskAadhaar(){
    const input=document.getElementById("aadharInput").value.trim();
    const output=document.getElementById("output");
    if(/^\d{12}$/.test(input)){
        const masked="********" + input.slice(-4);
        output.innerHTML="Masked Aadhaar:"+masked;
        alert("Submitted");
    }else{
        output.innerText="Please enter a valid 12-digit Aadhaar number.";
    }
};