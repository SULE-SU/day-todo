export function AboutUs() {
    return (
        <div className="about-us">
            <h1>关于我们</h1>
            <div className="about-content">
                <h2>hi I am Leo</h2>
                <p>欢迎使用我们的待办事项应用！</p>

                <h3>应用功能</h3>
                <ul>
                    <li>添加新的待办事项</li>
                    <li>标记事项为已完成</li>
                    <li>删除不需要的事项</li>
                    <li>查看已完成的事项列表</li>
                </ul>

                <h3>使用说明</h3>
                <p>在主页中，您可以通过输入框添加新的待办事项，点击事项可以标记为完成状态，点击"X"按钮可以删除事项。</p>

                <h3>联系我们</h3>
                <p>如有任何问题或建议，请联系：sule@oocl.com</p>
            </div>
        </div>
    );
}
