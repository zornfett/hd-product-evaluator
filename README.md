# hd-product-evaluator
scrape content from multiple URLs

NOTES ::

landing page = homedepot.com/water-damage-clarifyURL
main site/page = product appearance as result of site search
if there is price discrepancy, leave a NOTE/COMMENT in the field/color bg to RED
if not in stock
there will be no 'add to cart' button
tell david
all shipping should be 'free'
to test: clear cart, then fake-purchase an item, check initial pricing

interval is daily; CC: = David, Patrick, ChrisE, Greg

Googly:
scrape html return text output to JSON XLS
http://jeroenjanssens.com/2013/09/19/seven-command-line-tools-for-data-science.html


=====

- [why do we have fucking titles like this: "Water Damage Restoration Contractor Commercial Dehumidifier 8 Air Mover 2 Mini Air Mover"? I would think it deludes the brand / where is the goddam company name therein? if the answer is SEO: bullshit - Home Depot does its own SEO - verify this if HD has a marketing recommendations doc]

=====

PROGRAMMATIQUE:
GOAL: run script (in Console?) .. images will probably be verified by-hand (possible to output them to thumbnail page?)

Q: generally, how much crawling should be done from landing pages
- yeah, from the looks, perform all steps in indiv.pages / purchase test

--- [SKIP THIS / CRAWL WILL OCCUR IN INDIV.PAGES] go to 'b-air' search URL
crawl:
- all product URLs therein
- [save this step for purchase test?] whether they have 'add to cart' butt
- [save this step for purchase test?] nab prices
- [save this step for purchase test?] crawl product name?
- [save this step for purchase test?] search for 'free shipping'
Q: how go to page 2 of results?
take crawl data and:
- compare prices (if discrep, leave comment and color cell bg)
- compare copy (name, XXXX)? or display for eval elsewhere?


*** go to individual product pages *** 
Q: how list/store these URLs? array?
- compare 
-- OMSID = id="product_internet_number"
-- color = which product_sku_Overlay_ColorSwatch LI has 'selected' (swatch IMG title has color name too)
-- copy: name (do a compare?) = class="product-title__title" / I DO NOT see a 'description'
- collect main image URL and output to thumbnail page = id="mainImage", e.g. http://zornfett.com/client/b-air/direct-sales-content-IMGref-170427.html ACTUALLY >> collect ALL mainImage [color] variations to eval that they all have text
- if no 'add to cart' butt (out-of-stock), make note / tell david = id="atc_shipIt"
- purchase test: click 'add to cart', compare price in overlay (um, why would this differ from the display price?)
-- price = class="cartItem__price"
-- 'free shipping' within cart = class="fulfillment"
-- click path: [go to URL] Add To Cart > View Cart > [new page: compare price, search for 'free'] > Remove [next URL]
-- verify 'free shipping'
- HOW?!? verify appearance in the five 'categories', main & landing page
-- API the only weay to get around pagination?
- HOW?!? output results
-- into HTML?
-- into [googCloud] XLS


PROGRAM.RESOURCES:
NODE
http://www.netinstructions.com/how-to-make-a-simple-web-crawler-in-javascript-and-node-js/
PYTHON
http://pwp.stevecassidy.net/dataweb/crawling.html
PHP/PHANTOMJS
https://stackoverflow.com/questions/28505501/get-the-content-text-of-an-url-after-javascript-has-run-with-php

GOOGS
http://go.shr.lc/2spAsTD
http://jeroenjanssens.com/2013/09/19/seven-command-line-tools-for-data-science.html

THEIR DOCUMENTATION
Home Depot has an API: https://www.google.com/search?q=home+depot+api&ie=utf-8&oe=utf-8

https://www.programmableweb.com/api/home-depot-product
https://www.programmableweb.com/api/home-depot-store-search

http://developer.homedepot.com/book-page/product-apis (need credentials)
http://developer.homedepot.com/node/55 (need credentials / web api for the online catalog)
http://developer.homedepot.com/book-page/store-search-api (needs credentials / API docs?)
https://github.com/homedepot
https://github.com/homedepot/react-component-grid

unofficial API (pay bullshit): 
https://stevesie.com/apps/home-depot-api
- https://stevesie.com/apps/home-depot-api/search

https://homedepotlink.homedepot.com/en-us/Related%20Documents/Forms/AllItems.aspx
https://homedepotlink.homedepot.com/en-us/Related%20Documents/Vendor%20Portal%20User%20Guide.pdf
https://www.linkedin.com/in/ann-klumb-5b586383/

HD online help:
IDMTBSupport@thdidm.zendesk.com


DT QUESTIONS
1.  The only image evaluation we perform here is whether or not combo pack main images have text in them? 
YES
2.  Do product owners, like us, have landing pages/storefronts like we do on eBay? (I only see search results and the individual product pages) If so, can you provide the URLs?
http://www.homedepot.com/b/Featured-Products-Water-Damage-Restoration/N-5yc1vZcgvk
3.  What is difference between 'main image correct?' and 'image correct' (colums E & F) in your doc?
main image obv and color variations
4.  Should there be a column where we verify that the price is correct?
color in red if there's a discrepancy / comment
5.  what is a 'landing page' and 'main site' (columns R & S)?
landing same as 2 and mainsite is leftnav 'Departments':

http://www.homedepot.com/b/Featured-Products-Water-Damage-Restoration/N-5yc1vZcgvk
http://www.homedepot.com/b/Featured-Products-Water-Damage-Restoration-Air-Movers/N-5yc1vZcgvn
http://www.homedepot.com/b/Featured-Products-Water-Damage-Restoration-Air-Scrubbers/N-5yc1vZcgvl
http://www.homedepot.com/b/Featured-Products-Water-Damage-Restoration-Commercial-Dehumidifiers/N-5yc1vZcgvj
http://www.homedepot.com/b/Featured-Products-Water-Damage-Restoration-Contractor-Packs/N-5yc1vZch23

6.  how do we determine the inventory amount (column T)?
David does this ..
X. Is the ‘Data Quality & Maintenance’ section of the portal on PAGE 71 ever a part of your content management/corrections for homedepot.com? 
YES
XX. When we have disputes about content corrections homedepot.com makes on our images & copy, are they ever noted in the ‘Vendor Reject Response’ (PAGE 72) or are they noted in the ‘Vendor Content Review Exception Action’ on PAGE 80?
YES
XXX. The doc mentions there’s a ‘financial penalty’ (PAGE 71) for content issues/errors that lapse for more than 3 days – have they ever levied this against us? 
NOPE


ADDIT.NOTES:

Klumb, Ann
"Image standards are set in the data standards for your items. It will differ for each category/class as to what is required, what is acceptable, and what is not. You can find these in the Vendor Portal [I do not have access to this] under 'Vendor Resources' and then 'Data Standards'. It will outline what the images should look like, the spec requirements, and required vs. recommended images."

=====

I don't see any fucking 'water damage' section. Alternates:
http://www.homedepot.com/c/HT_WeatherCenter_Flood
http://www.homedepot.com/b/Heating-Venting-Cooling/N-5yc1vZc4k8/Ntk-BrandSearch/Ntt-b-air
http://www.homedepot.com/b/Heating-Venting-Cooling-Air-Quality/N-5yc1vZc4mg/Ntk-BrandSearch/Ntt-b-air
http://www.homedepot.com/b/Heating-Venting-Cooling-Portable-Fans/N-5yc1vZc4lw/Ntk-BrandSearch/Ntt-b-air
http://www.homedepot.com/b/Appliances/N-5yc1vZbv1w/Ntk-BrandSearch/Ntt-b-air
http://www.homedepot.com/b/Tools/N-5yc1vZc1xy/Ntk-BrandSearch/Ntt-b-air

"b-air" via HD search
http://www.homedepot.com/s/b-air?NCNI-5

"blowers"
http://www.homedepot.com/b/Heating-Venting-Cooling-Portable-Fans-Blower-Fans/N-5yc1vZc4m7

dehumidifiers
http://www.homedepot.com/b/Heating-Venting-Cooling-Air-Quality-Dehumidifiers/N-5yc1vZc4l8

