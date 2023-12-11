### อะไรคือ Design Token

https://medium.com/kingpowerclick/design-tokens-ep-1-%E0%B8%97%E0%B8%B3%E0%B9%84%E0%B8%9B%E0%B8%97%E0%B8%B3%E0%B9%84%E0%B8%A1-%E0%B8%97%E0%B8%B3%E0%B9%84%E0%B8%9B%E0%B9%80%E0%B8%9E%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%AD%E0%B8%B0%E0%B9%84%E0%B8%A3-be7d91b5d8f2

### Problem

ให้ผู้เรียนเขียน Code สำหรับเก็บค่า design-token ไว้ในตัวแปรหนึ่ง(ชื่อตัวแปรกำหนดเอง)  
เมื่อผู้ใช้งานโปรแกรมใส่ชื่อ design-token เข้ามาให้ตัวแปรเก็บค่าที่ทางทีม Design ได้กำหนดไว้ออกไป

Design Token Specification จากทีม Designer

```css

'color-primary-500': '#3498db';
'color-secondary-500': '#2ecc71';
'text-color': '#333333';
'font-base': '16px';
'font-weight-light': '300';
'font-weight-regular': '400';
'font-weight-bold': '700';
'spacing-small': '8px';
'spacing-medium': '16px';
'spacing-large': '24px';
'border-radius-small': '4px';
'border-radius-medium': '8px';
'border-radius-large': '12px';

```

- หากผู้ใช้งานกรอกชื่อ Design Token ที่ไม่มีอยู่ให้แสดงผล `Design token _____ not found.` และหยุดการทำงานของโปรแกรม
