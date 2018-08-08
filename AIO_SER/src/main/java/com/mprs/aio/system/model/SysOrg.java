 package com.mprs.aio.system.model;
 /**   
 *  
 * @Description:  机构
 * @Author:       SYP
 * @project       AIO   
 * @CreateDate:   Wed Aug 08 17:21:42 CST 2018
 * @Version:      v_1.0
 *    
 */
import com.mprs.aio.base.model.DataEntity; 


public class SysOrg extends DataEntity<SysOrg> {

	private static final long serialVersionUID = 1533720102148L;
	
	private String parentId;
	private String parentIds;
	private String name;
	private String code;
	private String type;
	private String url;
	private String icon;
	private String grade;
	private Double sort;
	private String master;
	private String mobile;
	private String useable;

	
	public String getParentId() {
		return this.parentId;
	}
	public void setParentId(String parentId) {
		this.parentId = parentId;
	}	
	public String getParentIds() {
		return this.parentIds;
	}
	public void setParentIds(String parentIds) {
		this.parentIds = parentIds;
	}	
	public String getName() {
		return this.name;
	}
	public void setName(String name) {
		this.name = name;
	}	
	public String getCode() {
		return this.code;
	}
	public void setCode(String code) {
		this.code = code;
	}	
	public String getType() {
		return this.type;
	}
	public void setType(String type) {
		this.type = type;
	}	
	public String getUrl() {
		return this.url;
	}
	public void setUrl(String url) {
		this.url = url;
	}	
	public String getIcon() {
		return this.icon;
	}
	public void setIcon(String icon) {
		this.icon = icon;
	}	
	public String getGrade() {
		return this.grade;
	}
	public void setGrade(String grade) {
		this.grade = grade;
	}	
	public Double getSort() {
		return this.sort;
	}
	public void setSort(Double sort) {
		this.sort = sort;
	}	
	public String getMaster() {
		return this.master;
	}
	public void setMaster(String master) {
		this.master = master;
	}	
	public String getMobile() {
		return this.mobile;
	}
	public void setMobile(String mobile) {
		this.mobile = mobile;
	}	
	public String getUseable() {
		return this.useable;
	}
	public void setUseable(String useable) {
		this.useable = useable;
	}	

}