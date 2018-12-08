package com.dotzet.rest.jersey.crud.suppliers;

import org.apache.ibatis.session.SqlSession;
import java.util.List;
public class SupplierDAO {
	public void insertSupplier(Supplier supplier){
	  SqlSession session = MyBatisUtil.getSqlSessionFactory().openSession();	
	  try {
		  session.insert("com.dotzet.rest.jersey.crud.suppliers.SupplierMapper.insertSupplier", supplier);
	  }
	  catch (Exception ex) {
		  ex.printStackTrace();
	  }
	  session.commit();
	  session.close();
	}
	public Supplier getSupplier(String vat) {
		  SqlSession session = MyBatisUtil.getSqlSessionFactory().openSession();	
		  Supplier supplier = session.selectOne("com.dotzet.rest.jersey.crud.suppliers.SupplierMapper.selectSupplier", vat);
		  session.close();
		  return supplier;
	}
	
	public void updateSupplier(Supplier supplier){
		  SqlSession session = MyBatisUtil.getSqlSessionFactory().openSession();	
		  try {
			  session.update("com.dotzet.rest.jersey.crud.suppliers.SupplierMapper.updateSupplier", supplier);
		  }
		  catch (Exception ex) {
			  ex.printStackTrace();
		  }
		  session.commit();
		  session.close();
	}
	
	public void deleteSupplier(String vat) {
		  SqlSession session = MyBatisUtil.getSqlSessionFactory().openSession();	
		  try {
			  session.delete("com.dotzet.rest.jersey.crud.suppliers.SupplierMapper.deleteSupplier", vat);
		  }
		  catch (Exception ex) {
			  ex.printStackTrace();
		  }
		  session.commit();
		  session.close();
	}
	
	public List<Supplier> getAll() {
		  SqlSession session = MyBatisUtil.getSqlSessionFactory().openSession();
		  List<Supplier> mySuppliers = null;
		  try {
			  mySuppliers = session.selectList("com.dotzet.rest.jersey.crud.suppliers.SupplierMapper.selectAllSuppliers");
		  }
		  catch (Exception ex) {
			  ex.printStackTrace();
		  }
		  session.commit();
		  session.close();
		  return mySuppliers;
	}
	
	public void deleteAll() {
		SqlSession session = MyBatisUtil.getSqlSessionFactory().openSession();	
		try {
			session.delete("com.dotzet.rest.jersey.crud.suppliers.SupplierMapper.deleteAll");
		}
		catch (Exception ex) {
			ex.printStackTrace();
		}
		session.commit();
		session.close();
	}
	
}