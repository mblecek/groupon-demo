export const AppComponent = {
    template: `
      <div>
         <ul>
          <li ng-repeat="deal in deals">
            <deal-item-angular name="deal.name" price="deal.price></deal-item-angular>
          </li>
        </ul>
      </div>
    `,
    controller: function ($scope) {
        $scope.deals = [
          { id: 1, name: "Deal 1", price: 10.0 },
          { id: 2, name: "Deal 2", price: 20.0 },
          { id: 3, name: "Deal 3", price: 30.0 },
        ];

      },
  };