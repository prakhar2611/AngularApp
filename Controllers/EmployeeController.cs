using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CrudOperation.DataAccess;
using CrudOperation.Models;
using Microsoft.AspNetCore.Mvc;

namespace CrudOperation.Controllers
{
    public class EmployeeController : Controller
    {

        public IActionResult Index()
        {
            return View();
        }
        DAEmployees dbClassObj = new DAEmployees();
        [HttpGet]
        [Route("api/Employee/Index")]
        public IEnumerable<TblEmployee> GetallEmployees()
        {
            return dbClassObj.GetAllEmployees();

        }

        [HttpPost]
        [Route("api/Employee/NewEmployee")]
        public bool NewEmployee([FromBody] TblEmployee empdata)
        {
            return dbClassObj.CreateEmployee(empdata);
        }

        [HttpDelete]
        [Route("api/Employee/Delete/{id}")]
        public int Delete(int id)
        {
            return dbClassObj.DeleteEmployee(id);
        }

        [HttpGet]
        [Route("api/Employee/Details/{id}")]
        public TblEmployee Details(int id)
        {
            return dbClassObj.GetEmployeeData(id);
        }

        [HttpPut]
        [Route("api/Employee/Edit")]
        public int Edit([FromBody]TblEmployee employee)
        {
            return dbClassObj.UpdateEmployee(employee);
        }
    }
}