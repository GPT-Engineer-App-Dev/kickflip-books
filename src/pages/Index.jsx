import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { toast } from "sonner";

const Index = () => {
  const [transactions, setTransactions] = useState([
    { id: 1, date: new Date(), amount: 200, type: "income", brand: "Nike" },
    { id: 2, date: new Date(), amount: 150, type: "expense", brand: "Adidas" },
  ]);

  const [newTransaction, setNewTransaction] = useState({
    date: new Date(),
    amount: "",
    type: "income",
    brand: "Nike",
  });

  const [filter, setFilter] = useState("all");

  const handleAddTransaction = () => {
    setTransactions([
      ...transactions,
      { ...newTransaction, id: transactions.length + 1 },
    ]);
    toast("Transaction added successfully.");
  };

  const handleDeleteTransaction = (id) => {
    setTransactions(transactions.filter((transaction) => transaction.id !== id));
    toast("Transaction deleted successfully.");
  };

  const filteredTransactions = transactions.filter((transaction) => {
    if (filter === "all") return true;
    return transaction.type === filter;
  });

  return (
    <div className="p-4">
      <Card>
        <CardHeader>
          <CardTitle>Add New Transaction</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Input
              type="text"
              placeholder="Date"
              value={newTransaction.date.toDateString()}
              onChange={(e) =>
                setNewTransaction({ ...newTransaction, date: new Date(e.target.value) })
              }
            />
            <Input
              type="number"
              placeholder="Amount"
              value={newTransaction.amount}
              onChange={(e) =>
                setNewTransaction({ ...newTransaction, amount: e.target.value })
              }
            />
            <Select
              value={newTransaction.type}
              onValueChange={(value) =>
                setNewTransaction({ ...newTransaction, type: value })
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="income">Income</SelectItem>
                <SelectItem value="expense">Expense</SelectItem>
              </SelectContent>
            </Select>
            <Select
              value={newTransaction.brand}
              onValueChange={(value) =>
                setNewTransaction({ ...newTransaction, brand: value })
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Brand" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Nike">Nike</SelectItem>
                <SelectItem value="Adidas">Adidas</SelectItem>
                <SelectItem value="Puma">Puma</SelectItem>
                <SelectItem value="Reebok">Reebok</SelectItem>
              </SelectContent>
            </Select>
            <Button onClick={handleAddTransaction}>Add Transaction</Button>
          </div>
        </CardContent>
      </Card>

      <div className="mt-8">
        <Card>
          <CardHeader>
            <CardTitle>Transactions</CardTitle>
          </CardHeader>
          <CardContent>
            <Select
              value={filter}
              onValueChange={(value) => setFilter(value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Filter" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="income">Income</SelectItem>
                <SelectItem value="expense">Expense</SelectItem>
              </SelectContent>
            </Select>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Brand</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredTransactions.map((transaction) => (
                  <TableRow key={transaction.id}>
                    <TableCell>{transaction.date.toDateString()}</TableCell>
                    <TableCell>{transaction.amount}</TableCell>
                    <TableCell>{transaction.type}</TableCell>
                    <TableCell>{transaction.brand}</TableCell>
                    <TableCell>
                      <Button
                        variant="outline"
                        onClick={() => handleDeleteTransaction(transaction.id)}
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;