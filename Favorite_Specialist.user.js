﻿// ==UserScript==
// @name        Favorite Specialist
// @namespace   StansScripts
// @description Copies Referral Doc details from the main list to your favorite specialist list
// @include     */billing/CA/BC/billingAddReferralDoc.jsp*
// @include     *oscarConsultationRequest/config/AddSpecialist.jsp*
// @include     *billing/CA/BC/billingManageReferralDoc*
// @include       *oscarEncounter/oscarConsultationRequest/ConsultationFormRequest*
// @require http://ajax.googleapis.com/ajax/libs/jquery/1.3/jquery.min.js
// @version 1
// ==/UserScript==

var elements = (window.location.pathname.split('/', 2))
firstElement = (elements.slice(1))
vPath = ('https://' + location.host + '/' + firstElement)
$('.MainTableRightColumn > form:nth-child(1) > input:nth-child(1)') .css('background-color', 'yellow');
$('.MainTableRightColumn > form:nth-child(1) > input:nth-child(1)') .focus()
function setCookie(cname, cvalue, exdays, cpath)
{
  var d = new Date();
  //d.setTime(d.getTime()+(exdays*24*60*60*1000));
  d.setTime(d.getTime() + (exdays * 5000));
  var expires = 'expires=' + d.toGMTString();
  document.cookie = cname + '=' + cvalue + '; ' + expires + '; ' + cpath
}
function getCookie(cname)
{
  var name = cname + '=';
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++)
  {
    var c = ca[i].trim();
    if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
  }
  return '';
}($('.MainTableRightColumn > form:nth-child(1) > fieldset:nth-child(2) > input:nth-child(20)') .val())
//Lastname1
$('.MainTableRightColumn > form:nth-child(1) > fieldset:nth-child(2) > input:nth-child(6)') .css('background-color', 'yellow');
var qlastname = $('.MainTableRightColumn > form:nth-child(1) > fieldset:nth-child(2) > input:nth-child(6)') .val()
//firstname1
var qfirstname = $('.MainTableRightColumn > form:nth-child(1) > fieldset:nth-child(2) > input:nth-child(8)') .val()
//specialty1
var qspecialty = $('.MainTableRightColumn > form:nth-child(1) > fieldset:nth-child(2) > input:nth-child(11)') .val()
//address1
var qaddress = $('.MainTableRightColumn > form:nth-child(1) > fieldset:nth-child(2) > input:nth-child(14)') .val() + ', ' + ($('.MainTableRightColumn > form:nth-child(1) > fieldset:nth-child(2) > input:nth-child(20)') .val())
//alert(qaddress)
//phone
var qphone = $('.MainTableRightColumn > form:nth-child(1) > fieldset:nth-child(2) > input:nth-child(28)') .val()
//fax
var qfax = $('.MainTableRightColumn > form:nth-child(1) > fieldset:nth-child(2) > b:nth-child(29) > b:nth-child(1) > input:nth-child(1)') .val()
var qrefno = $('.MainTableRightColumn > form:nth-child(1) > fieldset:nth-child(2) > input:nth-child(3)').val()

//alert(qaddress)
if (qlastname === undefined)
{
  qlastname = getCookie('lastname')
  qfirstname = getCookie('firstname')
  qspecialty = getCookie('specialty')
  qaddress = getCookie('address')
  qphone = getCookie('phone')
  qfax = getCookie('fax')
  qrefno = getCookie('refno')
} 
else
{
  window.open(vPath + '/oscarEncounter/oscarConsultationRequest/config/AddSpecialist.jsp')
  setCookie('lastname', qlastname, 1, 'path=/');
  setCookie('firstname', qfirstname, 1, 'path=/');
  setCookie('specialty', qspecialty, 1, 'path=/');
  setCookie('address', qaddress, 1, 'path=/');
  setCookie('phone', qphone, 1, 'path=/');
  setCookie('fax', qfax, 1, 'path=/');
  setCookie('refno', qrefno, 1, 'path=/');
  window.close()
}
//Lastname2
$('.MainTableRightColumn > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > form:nth-child(1) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(1) > td:nth-child(4) > input:nth-child(1)') .css('background-color', 'yellow');
$('.MainTableRightColumn > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > form:nth-child(1) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(1) > td:nth-child(4) > input:nth-child(1)') .val(qlastname)
//firstname2
$('.MainTableRightColumn > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > form:nth-child(1) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(1) > td:nth-child(2) > input:nth-child(1)') .val(qfirstname)
//specialty2
$('.MainTableRightColumn > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > form:nth-child(1) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(5) > td:nth-child(2) > input:nth-child(1)') .val(qspecialty)
//address2
$('.MainTableRightColumn > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > form:nth-child(1) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(2) > td:nth-child(2) > textarea:nth-child(1)') .val(qaddress)
//phone2
$('.MainTableRightColumn > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > form:nth-child(1) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(3) > td:nth-child(2) > input:nth-child(1)') .val(qphone)
//fax2
$('.MainTableRightColumn > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > form:nth-child(1) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(3) > td:nth-child(4) > input:nth-child(1)') .val(qfax)
//refno
$('.MainTableRightColumn > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > form:nth-child(1) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(5) > td:nth-child(4) > input:nth-child(1)').val(qrefno)
$('#EctConAddSpecialistForm').val(qrefno)





