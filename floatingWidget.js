class FloatingWidget {
    constructor(imgSrc, onClick){
        this.imgSrc = imgSrc;
        this.onClick = onClick;
    }

    init() {
        // 创建小控件的HTML元素
        let widgetDiv = document.createElement('div');
        widgetDiv.id = 'floating-widget';

        let img = document.createElement('img');
        img.src = this.imgSrc;
        img.style.width = '100%';
        img.style.height = 'auto';

        widgetDiv.append(img);

        // 使用CSS定位小控件
        widgetDiv.style.position = 'fixed';
        widgetDiv.style.bottom = '20px';
        widgetDiv.style.right = '20px';

        // 添加点击事件
        widgetDiv.addEventListener('click', this.onClick);

        // 将小控件添加到页面上
        document.body.append(widgetDiv);
    }
}
