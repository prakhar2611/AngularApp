using CrudOperation.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace CrudOperation.DataAccess
{
    public class DAEmployees
    {
        testdbContext dbContext = new testdbContext();
        public IEnumerable<TblEmployee> GetAllEmployees()
        {
            try
            {

                return dbContext.TblEmployee.ToList();
                /*List<TblEmployee> employeeList = new List<TblEmployee>();
                var f=dbContext.TblEmployee.FirstOrDefault(e => e.EmployeeId == 1);
                employeeList.Add(f);
                return employeeList.ToList();*/
            }
            catch
            {
                throw;
            }
        }
    public bool CreateEmployee(TblEmployee empdata)
    {
        bool result = false;
        try
        {
            TblEmployee newEmployee = new TblEmployee();
            newEmployee.Name = empdata.Name;
            newEmployee.Gender = empdata.Gender;
            newEmployee.City = empdata.City;
            newEmployee.Department = empdata.Department;
            dbContext.TblEmployee.Add(newEmployee);
            dbContext.SaveChanges();
            result = true;
        }
        catch
        {

        }
        return result;
    }


        //To Delete the record of a particular employee  
        public int DeleteEmployee(int id)
        {
            try
            {
                TblEmployee emp = dbContext.TblEmployee.Find(id);
                dbContext.TblEmployee.Remove(emp);
                dbContext.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }

        //To Update the records of a particluar employee  
        public int UpdateEmployee(TblEmployee employee)
        {
            try
            {
                dbContext.Entry(employee).State = EntityState.Modified;
                dbContext.SaveChanges();

                return 1;
            }
            catch
            {
                throw;
            }
        }

        //Get the details of a particular employee  
        public TblEmployee GetEmployeeData(int id)
        {
            try
            {
                TblEmployee employee = dbContext.TblEmployee.Find(id);
                return employee;
            }
            catch
            {
                throw;
            }
        }
    }
}
