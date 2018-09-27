<?php
if($_REQUEST['language']){
    $lang = $_GET['language'];
    /*"https://api.github.com/search/repositories 
    --data-urlencode "sort=stars" 
    --data-urlencode "order=desc" 
    --data-urlencode "q=language:java 
    created:>`date --date='7 days ago' '+%Y-%m-%d'`" 
    -H "Accept: application/vnd.github.v3.text-match+json"  
    | jq ".items[0,1,2,3,4] | {name, description, language, watchers_count, html_url}"
    */
    //$requestUrl = "http://lsapi.seomoz.com/linkscape/url-metrics/".urlencode($objectURL)."?Cols=".$cols."&AccessID=".$accessID."&Expires=".$expires."&Signature=".$urlSafeSignature;
    // Use Curl to send off your request.
    $options = array(
        CURLOPT_URL => 'https://api.github.com/search/repositories',
        CURL_POSTFIELDS => array(
            sort => 'stars',
            order => 'desc',
            language => '$lang',
            created => "created:>`date --date='7 days ago' '+%Y-%m-%d'`",

        ),
        CURLOPT_RETURNTRANSFER => true
        );
    $ch = curl_init($requestUrl);
    curl_setopt_array($ch, $options);
    $content = curl_exec($ch);
    curl_close($ch);
    $repoDetails = json_decode($content);
    
    //Write to FIle FOR TEST
    $writeF = fopen("returnVal.txt","w");
    fwrite($writeF, $repoDetails);
    fclose($writeF);
    return 1;
    }
?>




