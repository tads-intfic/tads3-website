---
layout: docs
---
<table width="100%" data-border="0" data-cellspacing="0"
data-cellpadding="3" data-bgcolor="#C0C0C0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr>
<td style="text-align: left;"><strong>TellToAction<br />
</strong></td>
<td style="text-align: right;"><a
href="stringpreparser.html">[Previous]</a> <a
href="generalintroduction.html">[Main]</a> <a
href="consultable.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
We can define a custom TellTo action that will translate TELL SARAH TO
JUMP into SARAH, JUMP or ASK SARAH TO GO NORTH into SARAH, NORTH rather
more neatly than using a StringPreParser. All we need to do is to define
a LiteralTAction that matches the grammar TELL X TO Y or ASK X TO Y. X
will be taken as the direct object of the command, and Y as a string
literal containing the command X is to execute. To make X execute the
command Y all we need then do is to tokenize the string Y and then call
Tokenizer.tokenize to convert it into a list of tokens we can feed into
the executeCommand function.  
  
The only real complication is that the player who uses this syntax is
likely to type ASK SARAH TO KISS YOU and expect it to behave like SARAH,
KISS ME; we therefore have to test whether 'you' exists among the
command tokens and if so replace every occurrence of it with 'me'.  
  
Here's the complete definition:  
  
DefineLiteralTAction(TellTo, IndirectObject);   
   
VerbRule(TellTo)  
 ('tell' \| 'ask' \| 'order') singleDobj 'to' singleLiteral  
 : TellToAction  
 verbPhrase = 'tell/telling (whom) (to what)'  
;  
  
modify Thing  
  dobjFor(TellTo)  
  {  
    verify() { illogical('{The dobj/he} do{es}n\\t accept orders. '); }  
  }  
;  
  
modify Actor  
  dobjFor(TellTo)  
  {  
    verify() {}  
    preCond = \[canTalkToObj\]  
    action()  
    {  
      local tokList = Tokenizer.tokenize(gLiteral);  
      /\* you probably want to translate 'you' into 'me'  
       \* likewise 'himself' or 'herself' into 'yourself'  
       \* in any token \*/  
        
      if(tokList.indexWhich({x: x\[1\] is in ('you', 'himself', 'herself')}))  
      {   
       local lst = \[\];  
       foreach(local tok in tokList)  
       {  
         if(tok\[1\] == 'you')  
         {  
           tok\[1\] = 'me';  
           tok\[3\] = 'me';  
         }  
         if(tok\[1\] is in ('himself', 'herself'))  
         {  
           tok\[1\] = 'yourself';  
           tok\[3\] = 'yourself';  
         }         
        lst += \[tok\];    
       }  
       tokList = lst;   
      }  
      executeCommand(self, gActor, tokList, true);  
    }  
  }  
;   
  
