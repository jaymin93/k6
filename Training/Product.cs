using System.Collections.Generic;
using System.Linq;

namespace Training
{
    public class Product
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public decimal Price { get; set; }
        public static void AddProduct(ApplicationDbContext context, Product product)
        {
            context.Products.Add(product);
            context.SaveChanges();
        }
        public static Product GetProductById(ApplicationDbContext context, int id)
        {
            return context.Products.FirstOrDefault((p) => p.Id == id);
        }
        public static List<Product> GetAllProduct(ApplicationDbContext context)
        {
            return context.Products.ToList();
        }
        public static void RemoveProductById(ApplicationDbContext context, int id)
        {
            var productToRemove = context.Products.FirstOrDefault((p) => p.Id == id);
            context.Products.Remove(productToRemove);
            context.SaveChanges();
        }
    }
}