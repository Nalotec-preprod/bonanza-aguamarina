import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";

export default function SheetMenu() {
  return (
    <div>
      <Sheet>
        <SheetTrigger asChild>
          <button>Abir</button>
        </SheetTrigger>

        <SheetContent>
          <SheetHeader>
            <SheetTitle></SheetTitle>
            <SheetDescription></SheetDescription>
          </SheetHeader>
          <div>
            <h1>Ejemplo</h1>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
