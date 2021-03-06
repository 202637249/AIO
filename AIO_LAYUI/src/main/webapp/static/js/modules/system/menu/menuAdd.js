/**
 * @autor syp
 * @content 菜单增加页面js
 * @returns
 * @Time 2018-08-01
 */
 layui.config({
 	base : "../../../../static/js/"
 }).extend({
 	"validparam"  : "validparam"
 }) 
layui.use(['form','layer','application','validparam','publicUtil'],function(){
    var form = layui.form,
		application = layui.application,
		validparam = layui.validparam,
		publicUtil  = layui.publicUtil
        layer = layui.layer,
        $ = layui.jquery;

	function formEdit(FormDatas){
		if(FormDatas != ''){
			var data = FormDatas;
			if(parent.isAdd){
				$(".parentId").val(data.id);
				$(".parentName").val(data.name);  
				publicUtil.selectBase(application.SERVE_URL+"/sys/sysdict/getByTypeCode", {'typeCode' : 'MENU_TYPE'} ,"type");		
				publicUtil.selectBase(application.SERVE_URL+"/sys/sysdict/getByTypeCode", {'typeCode' : 'PERMISSION'} ,"operate",true);
				publicUtil.selectBase(application.SERVE_URL+"/sys/sysdict/getByTypeCode", {'typeCode' : 'MENU_SHOW'} ,"isShow");
			}else{				
				$(".id").val(publicUtil.htmlDecode(data.id));
				$(".remark").val(publicUtil.htmlDecode(data.remark));
				$(".code").val(publicUtil.htmlDecode(data.code));
				$(".parentId").val(publicUtil.htmlDecode(data.parentId));
				$(".name").val(publicUtil.htmlDecode(data.name));
				$(".type select").val(publicUtil.htmlDecode(data.type)); 
				$(".permission").val(publicUtil.htmlDecode(data.permission));  
				$(".sort").val(publicUtil.htmlDecode(data.sort));  
				$(".icon").val(publicUtil.htmlDecode(data.icon));  
				$(".target").val(publicUtil.htmlDecode(data.target));  
				$(".href").val(publicUtil.htmlDecode(data.href)); 
				$(".parentName").val(data.parentSysMenu !=null ?publicUtil.htmlDecode(data.parentSysMenu.name):"");  
				publicUtil.selectBaseAndSetVal(application.SERVE_URL+"/sys/sysdict/getByTypeCode", {'typeCode' : 'MENU_SHOW'} ,"isShow",data.isShow);		
				publicUtil.selectBaseAndSetVal(application.SERVE_URL+"/sys/sysdict/getByTypeCode", {'typeCode' : 'MENU_TYPE'} ,"type",data.type);		
				publicUtil.selectBaseAndSetVal(application.SERVE_URL+"/sys/sysdict/getByTypeCode", {'typeCode' : 'PERMISSION'} ,"operate",data.operate);
			}
		}else{
			return false;
		}
	}

	//表单回填
	formEdit(parent.editFormData);
	
    form.on("submit(addMenu)",function(data){
        //弹出loading
        var index = top.layer.msg('数据提交中，请稍候',{icon: 16,time:false,shade:0.8});
		var res = $(".id").val() ==null|| $(".id").val() =="" ? "新增":"修改" ;
		var data={	
				"id" : $(".id").val() ==null|| $(".id").val() =="" ? null : $(".id").val(),
				"parentId" : $(".parentId").val(),
				"name" : $(".name").val(),
				"code" : $(".code").val(),
				"href" : $(".href").val(),
				"icon" : $(".icon").val(),
				"type" : $("#type").val(),
				"operate" : $("#operate").val(),
				"permission" : $(".permission").val(),
				"sort" : $(".sort").val(),
				"operate" : $("#operate").val(),
				"remark" : $(".remark").val(),
				"isShow" :$("#isShow").val(),
				"target" : $(".target").val()
		}
		//数据提交
		$.ajax({
			url: application.SERVE_URL+"/sys/sysmenu/save", //ajax请求地址
			data:data,
			success: function (data) {
				if(data.code==application.REQUEST_SUCCESS){
					top.layer.close(index);
					top.layer.msg(data.msg,{time: 1000});
					layer.closeAll("iframe");
					//刷新父页面
					parent.location.reload();
				}else{
					top.layer.msg(data.msg+"("+data.code+")",{time: 1000});
				}
			}
		}); 
        return false;
    })
	
	
	
	
	function selectMenu(){
		var index = layui.layer.open({
				type: 2,
				title: '菜单选择',
				shadeClose: true,
				shade: 0.8,
				area: ['280px', '65%'],
				// content: '../views/module/system/menu/menuselect.html',
				content: 'menuselect.html',
				success : function(layero, index){
					//
					setTimeout(function(){
							layui.layer.tips('点击此处返回菜单列表', '.layui-layer-setwin .layui-layer-close', {
									tips: 3
							});
					},500)											
				},
		})
	}	
	
	function selectIcon(){
		var index = layui.layer.open({
				type: 2,
				title: '图标选择',
				shadeClose: true,
				shade: 0.8,
				area: ['480px', '75%'],
				// content: '../views/module/system/menu/menuselect.html',
				content: '../../../../static/icon/icon.html',
				success : function(layero, index){
					//
					setTimeout(function(){
							layui.layer.tips('点击此处返回菜单列表', '.layui-layer-setwin .layui-layer-close', {
									tips: 3
							});
					},500)											
				},
		})
	}	
	
	$(".parentName").click(function(){
		selectMenu();
	})	
	
	$(".icon").click(function(){
		selectIcon();
	})
	
	$("#close").click(function(){
		layer.closeAll("iframe");
		//刷新父页面
		parent.location.reload();	
	})
})