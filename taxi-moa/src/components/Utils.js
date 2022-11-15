export default function timestamp(datetime){
    function pad(n) { return n<10 ? "0"+n : n }
    var d=new Date(datetime)
    return d.getFullYear()+"년 "+
        pad(d.getMonth()+1)+"월 "+
        pad(d.getDate())+"일 "+
        pad(d.getHours())+"시 "+
        pad(d.getMinutes())+"분";
        
}