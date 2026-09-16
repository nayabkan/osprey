from pydantic import BaseModel


class ProductCreate(BaseModel):

    name: str

    part_number: str

    description: str

    category: str

    sub_category: str | None = None

    standard: str | None = None

    material: str | None = None

    size: str | None = None

    grade: str | None = None

    process: str | None = None

    status: str = "In stock"

    quantity_available: int = 0

    specifications: str | None = None

    quantity: int = 0


class ProductResponse(BaseModel):

    id: int

    name: str

    part_number: str

    description: str

    category: str

    sub_category: str | None = None

    standard: str | None = None

    material: str | None = None

    size: str | None = None

    grade: str | None = None

    process: str | None = None

    status: str

    quantity_available: int

    specifications: str | None = None

    quantity: int

    class Config:

        from_attributes = True