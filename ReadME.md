## 倒计时组件
<style>
.center{
    text-align:center;
}
th{
    background:#ccc;
    color:#333;
}
td{
    background:#fff;
    color:#333;
}

</style>
<table style="border:1px #ccc solid;width:100%;">
    <tr>
        <th>组件属性</th>
        <th>值类型</th>
        <th>组件说明</th>
    </tr>
    <tr>
        <td class="center">count</td>
        <td>String</td>
        <td class="center">倒计时开始时间</td>
    </tr>
    <tr>
        <td class="center">bgColor</td>
        <td>String</td>
        <td class="center">倒计时组件背景颜色,传入String类型颜色编码,无背景传入'none'字符,</td>
    </tr>
    <tr>
        <td class="center">countOVer</td>
        <td>Function</td>
        <td class="center">倒计时结束时执行的方法,组件调用方使用bindcountOver来监听执行自定义的方法</td>
    </tr>
    <tr>
        <td class="center">实例</td>
        <td class="center" colspan="2"> 
            <code>
                <\countDown count="3" bgColor="#f00"  bindcountOver="myCustomEvent"></countDown> 
            </code> 
        </td>
    </tr>
</table>