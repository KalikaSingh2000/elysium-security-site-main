import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { products } from "@/data/products";
import { solutions } from "@/data/solutions";
import { industries } from "@/data/industries";
import { blogPosts } from "@/data/blogs";

const SearchCommand = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleShortcut = (event: KeyboardEvent) => {
      if ((event.key === "k" || event.key === "K") && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        setOpen((value) => !value);
      }
    };
    document.addEventListener("keydown", handleShortcut);
    return () => document.removeEventListener("keydown", handleShortcut);
  }, []);

  const go = (path: string) => {
    setOpen(false);
    navigate(path);
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Search products, solutions, and resources"
        className="flex h-9 items-center gap-2 rounded-full border border-border px-3 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground sm:px-3.5"
      >
        <Search className="h-4 w-4" />
        <span className="hidden lg:inline">Search</span>
        <kbd className="hidden rounded border border-border bg-secondary px-1.5 py-0.5 text-[10px] font-semibold text-muted-foreground lg:inline">
          Ctrl K
        </kbd>
      </button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search products, solutions, industries, and guides..." />
        <CommandList>
          <CommandEmpty>No results found. Try a product, solution, or industry name.</CommandEmpty>
          <CommandGroup heading="Products">
            {products.map((product) => (
              <CommandItem key={product.id} value={product.name} onSelect={() => go(`/products/${product.slug}`)}>
                {product.name}
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandGroup heading="Solutions">
            {solutions.map((solution) => (
              <CommandItem key={solution.id} value={solution.name} onSelect={() => go(`/solutions/${solution.slug}`)}>
                {solution.name}
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandGroup heading="Industries">
            {industries.map((industry) => (
              <CommandItem key={industry.id} value={industry.name} onSelect={() => go(`/industries#${industry.slug}`)}>
                {industry.name}
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandGroup heading="Insights">
            {blogPosts.map((post) => (
              <CommandItem key={post.id} value={post.title} onSelect={() => go(`/blog/${post.slug}`)}>
                {post.title}
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
};

export default SearchCommand;
