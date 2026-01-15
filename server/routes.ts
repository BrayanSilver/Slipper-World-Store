import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

async function seedDatabase() {
  const existing = await storage.getProducts();
  if (existing.length === 0) {
    console.log("Seeding database with products...");
    await storage.createProduct({
      name: "Cloud Walkers",
      description: "Experience walking on clouds with these ultra-soft fluffy slippers. Perfect for keeping your feet warm on cold mornings.",
      price: "24.99",
      imageUrl: "/images/cute_fluffy_slippers_7d991417.jpg",
      altText: "White fluffy slippers on a soft rug",
    });
    await storage.createProduct({
      name: "Cozy Cabin Classics",
      description: "Rustic and warm, these slippers are perfect for chilly evenings by the fireplace. Lined with faux fur for extra comfort.",
      price: "29.99",
      imageUrl: "/images/pair_of_comfortable__4b426b0c.jpg",
      altText: "Pair of warm brown bedroom slippers",
    });
    await storage.createProduct({
      name: "Rug Snugglers",
      description: "Aesthetic and warm, the perfect addition to your lounge wear. Designed for maximum relaxation.",
      price: "19.99",
      imageUrl: "/images/aesthetic_cozy_feet__097b5b6d.jpg",
      altText: "Feet in cozy slippers on a textured rug",
    });
    console.log("Seeding complete!");
  }
}

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Seed the DB
  seedDatabase().catch(err => console.error("Error seeding database:", err));

  app.get(api.products.list.path, async (req, res) => {
    const products = await storage.getProducts();
    res.json(products);
  });

  app.get(api.products.get.path, async (req, res) => {
    const product = await storage.getProduct(Number(req.params.id));
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
  });

  return httpServer;
}
