var parainputs=[ ];
var Parainputs2=[ ];
function Paramaking()
{
    for(var para=1; para<7; para++)
    {
        parainputs.push(document.getElementById("senten" + para).value);
    }
    parainputs.join(". ");
    document.getElementById("Parashower").innerHTML=parainputs;
}

function Paragraphmake()
{
    for(var Paragraph=1; Paragraph<7; Paragraph++)
    {
        Parainputs2.push(document.getElementById("sentence" + Paragraph).value);
    }
    Parainputs2.join(". ");
    document.getElementById("Paragraphshow").innerHTML=Parainputs2;
}