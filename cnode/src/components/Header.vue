<template>
     <div>
        <Header>
            <Menu mode="horizontal" theme="dark" active-name="1">
                <div class="layout-logo"></div>
                <div class="layout-nav">
                    <MenuItem name="1">
                        <span class="C">C</span>
                        <span class="n">n</span>
                        <span class="o">o</span>
                        <span class="d">d</span>
                        <span class="e">e</span>
                    </MenuItem>
                </div>
            </Menu>
        </Header>
     </div>
</template>
<style>
  .C,.n,.o,.d,.e{
      font-weight: bold;
      font-family: "微软雅黑";
      /* color: red; */
      color: blueviolet;
  }
  .C{
      font-size: 25px;
  }
  .n{
      font-size: 22px;
  }
  .o{
      font-size: 18px;
  }
  .d{
      font-size: 25px;
  }
  .e{
      font-size: 20px;
  }
</style>

