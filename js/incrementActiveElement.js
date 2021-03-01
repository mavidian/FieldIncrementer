var currValue = document.activeElement.value;

if (currValue === "") currValue = 0;

if (isNaN(currValue)) {
    window.alert(currValue + " is not a number; can't increment.")
} else {
    const incr = Number(window.prompt("Increment by", "1"));
    document.activeElement.value=Number(currValue) + incr;
}
