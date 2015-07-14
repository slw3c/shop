define(function(){
	var home = '<%_.each(datas, function(item) {%>'+
'            <div class="outer">'+
'                <div class="title">'+
'                    <span ><%=item.film%></span>'+
'                </div>'+
'                <ul class="ul">'+
'                    <%_.each(datas, function(item) {%>'+
'                        <li>'+
'                            <a href="<%=item.url%>">【<%=item.title%>】</a>'+
'                        </li>'+
'                    <%});%>'+
'                </ul>   ' +                    
'            </div>'+
'        <%});%>';

	return home;
});
