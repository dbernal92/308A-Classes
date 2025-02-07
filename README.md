# JavaScript OOP Example  

## Overview  
This project demonstrates **Object-Oriented Programming (OOP)** in JavaScript using objects and classes. It covers:  
- Creating objects with **literals and classes**  
- Using **inheritance** to extend classes  
- Adding **methods** to interact with object properties  

## Classes & Features  
- **`Animal`** → Base class with properties like `eyes`, `legs`, `isAwake`, and `isMoving`.  
- **`Human`** → Inherits from `Animal`, adds `name`, `age`, `occupation`, and `location`.  
- **`Developer`** → Extends `Human`, adds `programmingLanguage`.  
- **`FrontEndDeveloper`** → Extends `Developer`, adds `framework`, `designTool`, and `expYears`.  

## Example Usage  
```javascript
const newHire = new FrontEndDeveloper(
  true, true, "brown", "Terry", "Timm", 34, 
  "Brooklyn", "NY", 11227, "TypeScript", 7, "Figma", "React"
);

newHire.introduce();  
// Output: "Hello, my name is Terry Timm, and I'm a 34-year-old Front-End Developer from Brooklyn, NY!"

newHire.skill();  
// Output: "Terry has many programming language skills, but is most proficient in TypeScript."

newHire.job();  
// Output: "I have 7 years of experience using React. I prefer designing with Figma mostly."
