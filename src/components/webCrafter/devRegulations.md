# 组件开发流程与规范

1. 所有用于封装左侧工具栏内元素的组件统一放置在 `/pageComponents` 文件夹下，导出时统一将封装好的文件引入 **`exportComponents.js`** 内，方便在其余组件内引用。

2. `/pageComponents` 内目前暂时有 `muiElements` 与 `userModified` 两个文件夹，`muiElements` 用于存放封装好的 mui组件元素 (https://mui.com), `userModified` 用于存放自己自定义开发的元素。封装模块时在对应文件夹内新建模块文件夹（如：`muiElements/MaterialButton`)，并将对应react类型文件与样式存放在该文件夹内。

3. mui组件元素封装方法请参照 **`/pageComponents/muiElements/MaterialButton/MaterialButton.tsx`** 文件。craft.js框架请参照 (https://craft.js.org/docs/guides/basic-tutorial/#setup)

4. 封装组件流程：
   1. 在对应文件夹内封装组件，并将其引入`exportComponents.js`内进行导出
   2. 在`editor/Toolbox.tsx`内引入封装好的组件，具体可参照`editor/Toolbox.tsx`内已经引入的组件进行引入
   3. 在`CraftPage.jsx`的`<Editor>`的resolver内引入封装好的组件
