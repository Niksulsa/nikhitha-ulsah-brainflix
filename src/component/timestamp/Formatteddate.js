function Formatteddate(timestamp) {
    let dateObj = new Date(timestamp);
    let day = dateObj.getDate();
    var year = dateObj.getFullYear();
    let month = dateObj.getMonth() + 1;
    return month + '/' + day + '/' + year;
}

export default Formatteddate;
